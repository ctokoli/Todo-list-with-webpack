import './styles/style.css';

const todoList = [
  {
    index: 2,
    description: 'Booking my flight tomorrow',
    completed: false,
  },
  {
    index: 1,
    description: 'Visiting my children school friday',
    completed: false,
  },
  {
    index: 3,
    description: 'Going for groceries shopping',
    completed: false,
  },
  {
    index: 5,
    description: 'Visiting the gym',
    completed: false,
  },
  {
    index: 4,
    description: 'Visiting the the market',
    completed: false,
  },
];


const showTodo = () => {
  const listContainer = document.querySelector('.list-items');
  let placeholder = '';
  let sortTodoList = todoList.sort(
    (index1, index2) => (index1.index > index2.index) ? 1 : (index1.index < index2.index) ? -1 : 0);
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
