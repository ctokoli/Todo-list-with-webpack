const upDateCompleted = (sortTodoList, index, value) => {
  sortTodoList.forEach((todo) => {
    if (todo.index === parseInt(index, 10)) {
      todo.completed = value;
      localStorage.setItem('formdata', JSON.stringify(sortTodoList));
    }
  });
  return sortTodoList;
};

export default upDateCompleted;