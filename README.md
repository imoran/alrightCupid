# alrightCupid

[alrightCupid](https://alrightcupid.herokuapp.com/#/)

alrightCupid is a clone of the popular dating website, OKCupid. It has a Ruby on Rails/PostgreSQl backend and a React/Redux frontend.

## Features

 * Complete frontend/backend user authentication using BCrypt
 * Users can create and edit description questions (only if they're 18+)
 * Users are able to search other users by name
 * Has a demo page where users are able to browser other users
 * Users' locations are generated from their zipcode using Geocode


![splash](https://github.com/imoran/alrightCupid/blob/master/splash.png)

Sign Up/Sign In functionalities are made possible by BCrypt.

### Sign Up

Sign up starts from the splash page, where people select their gender and
sexual orientation, then it proceeds to ask more information, including their birthday and
location

![signup](https://github.com/imoran/alrightCupid/blob/master/signup.png)

All of this information is being passed as part of the signup slice of the state. Here is a sample

```javascript
{
  entities: {
    ui: {
      signup: {
        age: 25,
        first_name: "Bob",
        gender: "Other",
        orientation: "Other",
        location: "United States",
        zipcode: "94105"
      }
      modal:
    },
    errors: {
      *login: ["Incorrect username/password combination", "Password too short", "Username taken"],*
      session: []
    },
    session: {
      currentUser: null
  }
}
```

Custom error messages are displayed when information is missing.

![signup_errors](https://github.com/imoran/alrightCupid/blob/master/errors.png)

```javascript
  // all errors are kept in local state and when any of the categories are missing,
  // it adds that specific error to the array, and so we render as many errors as there were present.

  this.state = {
    first_name: '',
    month: 'Month',
    day: 'Day',
    year: 'Year',
    location: 'United States',
    zipcode: '',
    nameError: [],
    zipError: [],
    birthError: []
  };

  let nameError = first_name.length === 0 ? ['Sorry, your name can’t be blank.'] : [];
  let zipError = zipcode.length !== 5 ? ['Location is required.'] : [];
  let birthError = [];
  if (month === 'Month' || day === 'Day' || year === 'Year') {
    birthError = ["Something's missing!"];
  } else if ((currentYear - year) < 18 ) {
    birthError = ["You must be at least 18 years old to use AlrightCupid."];
  }
```

Finally, it gets the users' username and password.

This multi-step form made use of the signin slice of state, adding all the
required fields in order to create a user.

To avoid using different routes for each stage of the signin process,
I created a nextStep field of the local state of each component that
belonged to each stage. Each time the user clicked on the button that
led to the next page, step would be increased by one and the respective component
would be rendered

```javascript
  multiStep() {
    let color = "#24d8f3";
    switch (this.state.step) {
      case 1:
        return (
          <div className={this.state.css}>
            <HeaderContainer />
            <Splash />
            <SignUp1 nextStep={this.nextStep} />
          </div>);
      case 2:
        return <SignUp2
          nextStep={this.nextStep}
          css={color}
           />;
      case 3:
        return <SignUp3 css={color}/>;
      default:
        break;
    }
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    });
  }
```

The geocode gem is used to convert the zipcode (obtained from signin form)
into latitude and longitude, which is stored in the User table. This is then used to
generate the right location on the user's profile.


```javascript

  //I obtain the zipcode from the user and then before validating, I make sure to geocode the zipcode, which
  //is seen in this code snippet.
  class User < ApplicationRecord
    validates :username, :first_name, :password_digest, :session_token, presence: true
    validates :zipcode, presence: true
    geocoded_by :zipcode
    before_validation :ensure_session_token, :geocode
    after_initialize :ensure_geocode

    has_many :question_responses
    has_many :description_responses

    attr_reader :password

    def ensure_geocode
      return if valid_location?
      self.geocode
      self.save!
    end


    // all the methods required to obtain a users' city and state
    def get_city
      return self.city if self.city
      return "city" unless valid_location?
      geo_localization = "#{self.latitude}, #{self.longitude}"
      self.city = Geocoder.search(geo_localization).first.city
      self.save!
    end

    def valid_location?
      self.latitude && self.longitude
    end

    def get_state
      return "state" unless self.valid_location?
      return self.state if self.state
      geo_localization = "#{self.latitude}, #{self.longitude}"
      self.state = Geocoder.search(geo_localization).first.state
      self.save!
    end
  end
```

## Future Direction:

I plan to use the geocode functionality to be able to search users who are closest to the current User. Also, I'd
like to give the user the option to upload pictures and possibly have the ability to message other users.
