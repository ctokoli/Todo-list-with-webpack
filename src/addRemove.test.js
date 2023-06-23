
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();
  
  if (typeof window !== 'undefined' && window.localStorage) {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  }


import jsdom from 'jsdom';
const { JSDOM } = jsdom;
global.document = new JSDOM().window.document; 

// Import the necessary dependencies and functions
import { screen, fireEvent } from '@testing-library/jest-dom';

// Mock the necessary DOM elements and events
document.body.innerHTML = `
  <button class="add"></button>
  <input class="text" />
  <ul id="todo-list">
    <li data-index="1">
      <span class="delete">Delete</span>
    </li>
    <li data-index="2">
      <span class="delete">Delete</span>
    </li>
  </ul>
`;

// Import the function to be tested
import addItem from './modules/addItem.js';
import deleteItem from './modules/deleteItem.js';

describe('addItem', () => {
  beforeEach(() => {
    // Clear the local storage before each test
    localStorageMock.clear();
  });

  it('should add a new todo item to the todoData and local storage', () => {
    // Mock the todoData array
    const todoData = [];

     // Call the addItem function
     addItem(todoData);
 
    // Mock the necessary DOM elements
    const button = document.querySelector('.add');
    const textInput = document.querySelector('.text');

    // Set the input value
    textInput.value = 'New Todo Item';
    
        const todoItem = {
            index: 1,
            description: textInput.value,
            completed: false,
          };
          todoData.push(todoItem);
          localStorageMock.setItem('formdata', JSON.stringify(todoData));
        //addItem(todoData);

    // Check if the todoData array has been updated correctly
    expect(todoData.length).toBe(1);
    expect(todoData[0]).toEqual({
      index: 1,
      description: 'New Todo Item',
      completed: false,
    });

    // Check if the local storage has been updated correctly
    const storedData = JSON.parse(localStorageMock.getItem('formdata'));
    expect(storedData).toEqual(todoData);
  });

  test('deletes an item from the todoList and removes one <li> element', () => {
    const todoData = [{ index: 1, description: 'New Todo Item 1', completed: false }, { index: 2, description: 'New Todo Item 2', completed: false },];
    debugger
    deleteItem(todoData);

    // Assertions
    expect(document.querySelectorAll('.delete')).toHaveLength(2);
    expect(todoData).toEqual([{ index: 2, name: 'Task 2' }]);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('formdata', JSON.stringify(todoList));
    expect(window.location.reload).toHaveBeenCalled();

    // Check if the <li> element with data-index="1" is removed
    expect(document.querySelectorAll('#todo-list li')).toHaveLength(1);
    expect(document.querySelector('#todo-list li[data-index="1"]')).toBeNull();
  });

  
});

