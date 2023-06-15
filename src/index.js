import './styles/style.css';
import addItem from './modules/addItem.js';

let todoList = JSON.parse(localStorage.getItem('formdata')) || [];
let count = todoList.length;
const sortTodoList = todoList.sort((index1, index2) => {
  if (index1.index > index2.index) {
    return 1;
  } if (index1.index < index2.index) {
    return -1;
  }
  return 0;
});

const showTodo = () => {
  const listContainer = document.querySelector('.list-items');
  let placeholder = '';
  addItem(sortTodoList, count);
  sortTodoList.forEach((todo) => {
    placeholder += `
        <li>
            <div>
                <input type="checkbox" class="checkbox" name="checkbox">
                <lable>${todo.description}</lable>
            </div>
            <i class="fas fa-ellipsis-v"></i>
        </li>
        `;
  });

  listContainer.innerHTML = placeholder;
};

showTodo();


