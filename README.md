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

All of this information is being passed as part of the signin slice of the state.

```js
{
  entities: {
    ui: {
      signin:
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

As it progresses through










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
