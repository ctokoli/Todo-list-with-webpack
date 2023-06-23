const completedDelete = (todoList, bool) => {
      todoList = todoList.filter((todo) => todo.completed !== bool);
      localStorage.setItem('formdata', JSON.stringify(todoList)); 
      return todoList;
  };
  
  export default completedDelete;