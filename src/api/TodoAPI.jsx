var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;
    searchText = searchText.toLowerCase();
    //filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => !todo.completed || showCompleted);

    //filter by search text
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
    });

    //sort todos with noncomleted first
    filteredTodos.sort((a, b) => {
      //if a is false and b is true
      if (!a.completed && b.completed) {
        return -1; //a should come before b, so not completed todos will go first over completed todos
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
