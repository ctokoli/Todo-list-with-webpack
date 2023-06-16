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
        <li class="item-list item-input" contenteditable ="true" data-index="${todo.index}">
            <div>
                <input type="checkbox" contenteditable="false" class="checkbox" name="checkbox">
                <lable>${todo.description}</lable>
            </div>
            <i class="fas fa-ellipsis-v"></i>
            <i class="fa-regular fa-trash-can"></i>
        </li>
        `;
  });

  listContainer.innerHTML = placeholder;
};

showTodo();

const updateIndex =  (index, value) =>{
  for(const todo of sortTodoList){
    if(todo.index == index){
      todo.description = value;
      localStorage.setItem('formdata', JSON.stringify(sortTodoList));
    }
  }
}


//const trashIcon = document.querySelector('.fa-trash-can');

const editItem = () =>{
  document.querySelectorAll('.item-input').forEach((element) => {
    element.addEventListener('focus', () =>{
      //console.log(element.getAttribute("data-index"));
      let getIndex = element.getAttribute("data-index");
      let ellipsis = element.children[1];
      let trashIcon = element.lastElementChild;
      //console.log(ellipsis);
      ellipsis.classList.add('hide');
      trashIcon.classList.add('show');
      let inputVal = element.firstElementChild.lastElementChild.innerHTML;
     element.contenteditable ="true";
      element.onblur = ()=> {
        element.style.backgroundColor = '';
        trashIcon.classList.remove('show');
        ellipsis.classList.remove('hide');
        let newValue = element.firstElementChild.lastElementChild.innerHTML;
        if(inputVal == newValue){
          return;
        }else{
          updateIndex(getIndex, newValue);
        }
        //console.log(inputVal);
        //console.log(element.firstElementChild.lastElementChild.innerHTML);
       
      };

      element.style.backgroundColor = 'lightgoldenrodyellow';
      element.style.outline = '';
      
    })
  });
}

editItem();

