
const addItem = (todoData, count) =>{
    const button = document.querySelector('.add');
    const textInput = document.querySelector('.text');
    button.addEventListener('click', () => {
        console.log(textInput.value);
        const todoItem = {
            index: count +=1,
            description: textInput.value,
            completed: false
        };
        todoData.push(todoItem);
        localStorage.setItem('formdata', JSON.stringify(todoData));
    })
};

export default addItem;