var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'src/firebase/';
import router from 'src/router/'

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




ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app'));
