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
});
