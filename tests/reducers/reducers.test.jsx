var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      // action that we want to dispatch
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      // we pass default state and our custom action
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Soemthing new to do'
      };

      var res = reducers.todosReducers(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toBe(action.text);
    });

    it('should toggle todo', () => {

      var todos = [{id: 123, text: 'Something', completed: true, createdAt: 123, completedAt: 125}];

      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };

      var res = reducers.todosReducers(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(null);
    });
  });
});
