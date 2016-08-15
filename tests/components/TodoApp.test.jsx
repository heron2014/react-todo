var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state in handleAddTodo', () => {
    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
    todoapp.setState({todos: []});
    todoapp.handleAddTodo('testing text');

    expect(todoapp.state.todos[0].text).toBe('testing text');
  });

  it('shoudl toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});
    //check that todos first item has completed to false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // call handleToggle with 11
    todoApp.handleToggle(todoData.id);
    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true)
  });
});
