
# simply-redux

This application is a basic implementation of *redux* library along with *create-react-app* cli. This application fetches data from a rest api and adds a new post to the api with the help of fetchPosts and createPosts as reducer functions.

## It has two components :

#### Post component
Fetches a list of posts from the [JSON Placeholder api](https://jsonplaceholder.typicode.com)<br/>
which is a dummy rest api

#### Form component 
Adds a new post to the list of posts retrieved from the api


*Redux* has been used just so that we can share states between the two components i.e. adding a post to the form 
will update the list of the form data.

Also for debugging purpose, install the [redux chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) which is just an *enhancer function* and has been implemented in the file [store.js](src/store.js) <br/>

### In the project directory, you can run:

## `npm install`

Installs all the dependencies needed to run this application

## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



