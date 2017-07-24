# Testing React

Install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080` to run your application.

To build the static files:

```
npm run build
```

To run tests in Node:

```
npm test
```

---

## Jest

_Jest is the de facto unit testing framework for ReactJS project. It is provided and used by Facebook themselves._

**Top features are:**

* Automatically finds tests
* Automatically mocks dependencies
* Runs your tests with a fake DOM implementation
* Runs tests in parallel processes

To install: 

```
npm install --save-dev jest
```

Just like `chai`, just uses the `expect` keyword, only with some slight differences. One syntactical difference you'll want to make note of is the simple check that something equals and expected result...

###### Chai: `expect(something).to.equal(true)`

###### Jest: `expect(something).toEqual(true)`

check out the [expect documentation](https://facebook.github.io/jest/docs/expect.html#content). Count off 1 thru 6, find your team and spend 10 mins reading up on your assigned method:

1. toBeDefined()
2. toHaveBeenCalled()
3. toHaveLength(number)
4. toEqual()
5. toBe()
6. toBeTruthy() && toBeFalsy() 

## Enzyme

From the [enzyme](https://github.com/airbnb/enzyme) docs:

_Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output._

_Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal._

_Enzyme is unopinionated regarding which test runner or assertion library you use, and should be compatible with all major test runners and assertion libraries out there. The documentation and examples for enzyme use mocha and chai, but you should be able to extrapolate to your framework of choice._

To install:

```
npm i --save-dev enzyme
```

###### There are two things we'll use from enzyme to help test our components:

* [shallow](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)
* [mount](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)

To understand the difference, check out [this breakdown](https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913)

Enzyme also comes with some methods of its own. Let's spend another 10 minutes researching your assigned method (same groups as before):

1. find()
2. props()
3. instance()
4. children()
5. text()
6. state()

## Why Test? 

If we haven't done a good job of explaining the benefits of testing your code already...maybe [this article](https://daveceddia.com/what-to-test-in-react-app/) will help!

## What to Test?

Everything! Ok, maybe not everything but the goal is to have your app so well tested that you can refactor and feel 100% confident that the desired functionality is covered by tests. This will help you assure that any refactored code is working if your tests pass. 

Some things to consider...

* Does your component render?
* Are props being passed and accepted correctly?
* Does the component manipulate state? 
* Are the correct functions being called? 
* When you add something to the DOM/Virtual DOM, does it show? 
    * When you add another, are there 2 items correctly being rendered? 
    * When you delete an item, is the count updated correctly? 
    
    
## How to Test?

We will use this repo to work through some tests. This app _should_ look familiar. 

* Clone this repo and `cd` into it
* `git checkout in-class`
* run `npm i`
* open up your text editor and lets work through some tests!

---

## Time to Test!

Let's spend a few minutes walking through the code base to familiarize ourselves with the layout...

Because jest finds our tests automatically, we don't need to import it. We do however need `React` and `Enzyme`. Let's create the first test file and bring those in:

```
touch app.test.js
```

```
// app.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
```

We'll also need to import our `App` component:

```
import App from '../lib/components/App';
```

Now let's create an easy first test to ensure everything is hooked up and working:

```
describe('App', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

})
```

Now let's look at our app's `render` function, it returns a `Header` and a `ToDontList` component. Let's make sure those exist. We can use the 

```
// lib/components/App.js

  render() {
    const { toDonts } = this.state;

    return (
      <div>
        <Header toDonts={ toDonts } addToDont={this.addToDont.bind(this)} />
        <ToDontList toDonts={ toDonts }
                    updateCard={(card) => this.updateCard(card)}
                    deleteCard={(card) => this.deleteCard(card) }/>
      </div>
    )
  }
```

```
// tests/app.test.js

  it('should render the Header and ToDontList component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('ToDontList').length).toEqual(1)
  })
```

But wait, we've now defined wrapper twice so let's pull that out into a `beforeEach`. Our test file should now look like this:

```
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    
    expect(wrapper).toBeDefined()
  })

  it('should render the Header and ToDontList component', () => {

    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('ToDontList').length).toEqual(1)
  })
})
```


##### Resources:
* [Jest docs](https://facebook.github.io/jest/)
* [Enzyme docs](https://github.com/airbnb/enzyme)
  * [Shallow docs](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)
  * [Mount docs](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)
* [Difference between Shallow, Mount & Render](https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913)
* [Worthwhile Testing by Dave Ceddia](https://daveceddia.com/what-to-test-in-react-app/)

