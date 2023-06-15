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
