const deleteItem = (todoList, index) => {
  todoList = todoList.filter((todo) => todo.index !== parseInt(index, 10));
  return todoList;
};

export default deleteItem;