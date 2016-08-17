var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    // this is completed action when I call my action generator
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    //call the setSearchText() function
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    // this is completed action when I call my action generator
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    //call the setSearchText() function
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    // this is completed action when I call my action generator
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    //call the setSearchText() function
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    // this is completed action when I call my action generator
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    //call the setSearchText() function
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
