import './styles/style.css';

const todoList = [
  {
    index: '1',
    description: 'Booking my flight tomorrow',
    completed: false,
  },
  {
    index: '2',
    description: 'Visiting my children school friday',
    completed: false,
  },
  {
    index: '3',
    description: 'Going for groceries shopping',
    completed: false,
  },
  {
    index: '3',
    description: 'Visiting the gym',
    completed: false,
  },
];

const showTodo = () => {
  const listContainer = document.querySelector('.list-items');
  let placeholder = '';

  todoList.forEach((todo) => {
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
