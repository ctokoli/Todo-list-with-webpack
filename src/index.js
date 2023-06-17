import './styles/style.css';
import addItem from './modules/addItem.js';
import showTodo from './modules/render.js';

let todoList = JSON.parse(localStorage.getItem('formdata')) || [];
const sortTodoList = todoList.sort((index1, index2) => {
  if (index1.index > index2.index) {
    return 1;
  } if (index1.index < index2.index) {
    return -1;
  }
  return 0;
});

showTodo(sortTodoList);
addItem(todoList);


const updateIndex = (index, value) =>{
  for(const todo of sortTodoList){
    if(todo.index == index){
      todo.description = value;
      localStorage.setItem('formdata', JSON.stringify(sortTodoList));
    }
  }
}
 
 
const deleteItem = () => {
 document.querySelectorAll('.delete').forEach(element => {
  element.addEventListener('click', (e) => { 
    console.log(e.target);
    let getIndex = element.parentElement.getAttribute("data-index");
    console.log(getIndex);
    todoList = todoList.filter((todo) =>  todo.index !== parseInt(getIndex));
    localStorage.setItem('formdata', JSON.stringify(todoList));
    window.location.reload();
  });
  
 });

}

deleteItem();



//const trashIcon = document.querySelector('.fa-trash-can');

const editItem = () =>{
  document.querySelectorAll('.item-input').forEach((element) => {
    element.addEventListener('click', (e) =>{
      let ParentE = element.parentElement.parentElement;
      ParentE.style.backgroundColor = 'lightgoldenrodyellow';
      element.style.outline = '';
      let getIndex = ParentE.getAttribute("data-index");
      let inputVal = element.innerHTML;
      element.onblur = ()=> {
        ParentE.style.backgroundColor = '';
        let newValue = element.innerHTML;
        if(inputVal == newValue){
          return;
        }else{
          updateIndex(getIndex, newValue);
        }
      };
    })
  });
}

editItem();



