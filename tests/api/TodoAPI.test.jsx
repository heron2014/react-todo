var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  //this following code will run before each of the tests
  // we can clean up our localStorage
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  // describe('setTodos', () => {
  //   it('should set valid todos array', () => {
  //     var todos = [{
  //         id: 11,
  //         text: 'test todo',
  //         completed: false
  //     }];
  //     TodoAPI.setTodos(todos);
  //
  //     var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //
  //     expect(actualTodos).toEqual(todos);
  //   });
  //
  //   it('should not set invalid todos array', () => {
  //     var badTodos = {
  //       a: 'a'
  //     };
  //     TodoAPI.setTodos(badTodos);
  //
  //     expect(localStorage.getItem('todos')).toBe(null);
  //   });
  // });
  //
  // describe('getTodos', () => {
  //   it('should return [] for bad localStorage data', () => {
  //     var actualTodos = TodoAPI.getTodos();
  //
  //     expect(actualTodos).toEqual([]);
  //   });
  //
  //   it('should return todos array if valid data in localStorage', () => {
  //     var todos = [{
  //         id: 11,
  //         text: 'test todo',
  //         completed: false
  //     }];
  //
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //     var actualTodos = TodoAPI.getTodos();;
  //     expect(actualTodos).toEqual(todos);
  //   });
  // });

  describe('filterTodos', () => {
    var todos = [{id: 1, text: 'some test1', completed: true},{id: 2, text: 'test2', completed: true}, {id: 3, text: 'test3', completed: false}];
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return only items with completed false (not completed) if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
  });
});
