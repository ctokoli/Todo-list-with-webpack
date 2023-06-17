import showTodo from './render.js';

const addItem = (todoData) =>{
    let button = document.querySelector('.add');
    let textInput = document.querySelector('.text');
    button.addEventListener('click', (e) => {
        //console.log(e);
        const len = todoData.length;
       if(textInput.value !== ''){
        const todoItem = {
            index: len + 1,
            description: textInput.value,
            completed: false
        };
        //console.log(todoData);
        todoData.push(todoItem);
        //todoData.filter(val => val);
        console.log(todoData);
        localStorage.setItem('formdata', JSON.stringify(todoData));
        window.location.reload();
       }
        
    });
    
};


export default addItem;