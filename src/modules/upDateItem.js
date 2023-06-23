const updateIndex = (sortTodoList, index, value) => {
  sortTodoList.forEach((todo) => {
    if (todo.index === parseInt(index, 10)) {
      todo.description = value;
      localStorage.setItem('formdata', JSON.stringify(sortTodoList));
    }
  });
  return sortTodoList;
};

export default updateIndex;
