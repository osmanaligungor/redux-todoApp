import ActionTypes from "../actionTypes";

const { ADD, DELETE, TOGGLE, UPDATE, SET } = ActionTypes;

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // eğer aksiyonun type'ı add ise
    case ADD:
      // aksiyonun payload'ı ile gelen todo'yu eskilerin arasına ekle
      const newTodos = state.todos.concat(action.payload);
      // state'in son halini return et
      return { todos: newTodos };

    case DELETE:
      // diziden payload ile gelen id'li elemanı kaldır
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return { todos: filtered };

    case TOGGLE:
      // is_done değerini tersine çevir
      const updated = { ...action.payload, is_done: !action.payload.is_done };

      // dizideki eski nesnenin yerine yenisini koy
      const updatedTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );
      return { todos: updatedTodos };

    case UPDATE:
      const editedTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { todos: editedTodos };

    case SET:
      return { todos: action.payload };

    default:
      return state;
  }
};
export default todoReducer;
