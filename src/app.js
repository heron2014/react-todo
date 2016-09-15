var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'src/firebase/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos')
  } else {
    hashHistory.push('/')
  }
})

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
//get initial todos from store by dispatching action addTodos to the store
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos())

// load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

//middleware for private pages
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }

  next();
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }

  next();
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
