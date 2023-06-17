import './styles/style.css';
import addItem from './modules/addItem.js';
import showTodo from './modules/render.js';
import editItem from './modules/editTodo.js';

let todoList = JSON.parse(localStorage.getItem('formdata')) || [];
const sortTodoList = todoList.sort((a, b) => a.index - b.index);

showTodo(sortTodoList);
addItem(todoList);
editItem(sortTodoList);


const deleteItem = () => {
  document.querySelectorAll('.delete').forEach((element) => {
    element.addEventListener('click', () => {
      const getIndex = element.parentElement.getAttribute('data-index');
      todoList = todoList.filter((todo) => todo.index !== parseInt(getIndex, 10));
      localStorage.setItem('formdata', JSON.stringify(todoList));
      window.location.reload();
    });
  });
};

deleteItem();



