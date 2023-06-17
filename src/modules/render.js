const showTodo = (sortTodoList) => {
  const listContainer = document.querySelector('.list-items');
  let placeholder = '';
  listContainer.innerHTML = '';
  sortTodoList.forEach((todo) => {
    placeholder += `
          <li class="item-list"  data-index="${todo.index}">
              <div class="list-cont">
                  <input type="checkbox" class="checkbox" name="checkbox">
                  <p class="item-input" contenteditable ="true">${todo.description}</p>
              </div>
              <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
          </li>
          `;
  });

  listContainer.innerHTML = placeholder;
};

export default showTodo;