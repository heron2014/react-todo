var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should disptach ADD_TODO when valid todo text', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Check mail'
    }
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo disptach={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.todoText.value = 'Check mail';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid data', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
