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
addItem(sortTodoList, count);


showTodo();


const updateIndex = (index, value) =>{
  for(const todo of sortTodoList){
    if(todo.index == index){
      todo.description = value;
      localStorage.setItem('formdata', JSON.stringify(sortTodoList));
    }
  }
}

const deleteItem = (deleteButton, element) => {
  deleteButton.addEventListener('click', () => {
    console.log(todoList);
    let getIndex = element.getAttribute("data-index");
    todoList = todoList.filter((todo) =>  todo.index !== parseInt(getIndex));
    localStorage.setItem('formdata', JSON.stringify(todoList));
    console.log(todoList);
  });
}


//const trashIcon = document.querySelector('.fa-trash-can');

const editItem = () =>{
  document.querySelectorAll('.item-input').forEach((element) => {
    element.addEventListener('click', (e) =>{
      e.stopPropagation();
       // deleteButton = document.querySelector('.fa-trash-can');
      deleteItem(e.target, element);
      //console.log(element.getAttribute("data-index"));
      
      //console.log(deleteButton)
      
      let getIndex = element.getAttribute("data-index");
      let ellipsis = element.children[1];
      let trashIcon = element.lastElementChild;
      //console.log(ellipsis);
      ellipsis.classList.add('hide');
      trashIcon.classList.add('show');
      let labelElement = element.firstElementChild.lastElementChild;
      let inputVal = element.firstElementChild.lastElementChild.innerHTML;
      labelElement.onblur = ()=> {
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



