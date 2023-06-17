import './styles/style.css';
import addItem from './modules/addItem.js';
import showTodo from './modules/render.js';

let todoList = JSON.parse(localStorage.getItem('formdata')) || [];
const sortTodoList = todoList.sort((a, b) => a.index - b.index);

showTodo(sortTodoList);
addItem(todoList);

const updateIndex = (index, value) => {
  sortTodoList.forEach((todo) => {
    if (todo.index === parseInt(index, 10)) {
      todo.description = value;
      localStorage.setItem('formdata', JSON.stringify(sortTodoList));
    }
  });
};

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

const editItem = () => {
  document.querySelectorAll('.item-input').forEach((element) => {
    element.addEventListener('click', () => {
      const ParentE = element.parentElement.parentElement;
      ParentE.style.backgroundColor = 'lightgoldenrodyellow';
      element.style.outline = '';
      const getIndex = ParentE.getAttribute('data-index');
      const inputVal = element.innerHTML;
      element.onblur = () => {
        ParentE.style.backgroundColor = '';
        const newValue = element.innerHTML;
        if (inputVal !== newValue) {
          updateIndex(getIndex, newValue);
        }
      };
    });
  });
};

editItem();
