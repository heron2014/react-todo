var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    // this is completed action when I call my action generator
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    //call the setSearchText() function - action generator
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {

    var todos = [
      {
        id: 111,
        text: 'testing',
        completed: false,
        completedAt: null,
        createdAt: 3330
      }
    ]
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
