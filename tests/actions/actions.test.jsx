import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
var actions = require('actions');
import firebase, {firebaseRef} from 'src/firebase';

//create fake store
var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123',
        text: 'Anything',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  //asynchronous test, we pass done argument
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      var actions = store.getActions(); //fire all actions on the store
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done(); // you need done to finish test
    }).catch(done);
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
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  //set up data before running tests
  describe('Tests with firebase data', () => {
      var testTodoRef;

      beforeEach((done) => {
        var todosRef = firebaseRef.child('todos');

        todosRef.remove().then(() => {
          testTodoRef = firebaseRef.child('todos').push();

          return testTodoRef.set({
            text: 'Something todo from test',
            completed: false,
            createdAt: 45454545
          })
        })
        .then(() => done())
        .catch(done);
      });

      afterEach((done) => {
        testTodoRef.remove().then(() => done());
      })

      it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
        const store = createMockStore({});
        const action = actions.startToggleTodo(testTodoRef.key, true);

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id: testTodoRef.key
          })

          expect(mockActions[0].updates).toInclude({
            completed: true
          });

          expect(mockActions[0].updates.completedAt).toExist();

          done();

        }, done);
      })

      it('should populate todos and dispatch ADD_TODOS', (done) => {
        const store = createMockStore({});
        const action = actions.startAddTodos();

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toEqual(1);
          expect(mockActions[0].todos[0].text).toEqual('Something todo from test');
          done();
        }, done)
      });


  })

});
