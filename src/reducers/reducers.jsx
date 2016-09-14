var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_SEARCH_TEXT':
    return action.searchText;
  default:
    return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_SHOW_COMPLETED':
    return !state;
  default:
    return state;
  };
};

// reducer responsible for ADD_TODO and TOGGLE_TODO actions

export var todosReducers = (state = [], action) => {
  switch (action.type) {
  case 'TOGGLE_TODO':
    return state.map((todo) => {
      if (todo.id === action.id) {
        return {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? moment().unix() : null
        };
      } else {
        return todo;
      }
    });
  case 'ADD_TODOS':
    return [
      ...state,
      ...action.todos
    ];
  case 'ADD_TODO':
    return [
      ...state,
      action.todo
    ]
  default:
    return state;
  }
}
