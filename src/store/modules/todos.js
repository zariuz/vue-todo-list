const todos = {
  state: {
    todos: [],
    filter: 'all'
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter(item => item.id !== todoId);
    },
    checkTodo(state, todo) {
      state.todos = state.todos.map(item =>
        item.id === todo.id ? todo : item
      );
    },
    filterTodos(state, filter) {
      state.filter = filter;
    }
  },
  getters: {
    todoById: state => id => {
      return state.todos.filter(item => item.id === id);
    }
  },
  actions: {}
};

export default todos;
