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

![signup]('https://github.com/imoran/alrightCupid/blob/master/signup_errors.png')

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














- [ ] Links to the Wiki design documents
- [ ] Describes technologies used
- [ ] Describes core functionality
- [ ] Lists future directions
- [ ] Fills out `Description` and `Website` at the top of the repo.

**Format:**
- [ ] Uses markdown formatting
- [ ] Includes code snippets (with triple backticks, and the language ` ```javascript...``` `)
- [ ] Includes screenshots / gifs

**Optional:**
- [ ] Describes technical challenges
- [ ] Add `topics` to the top of the repo
