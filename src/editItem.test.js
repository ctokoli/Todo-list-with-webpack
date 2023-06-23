import updateIndex from './modules/upDateItem.js';
import upDateCompleted from './modules/upDateCompleted.js';
import completedDelete from './modules/completedDelete.js';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

describe('editing the task description', () => {
  beforeEach(() => {
    // clear localstorage Mock before each test
    localStorage.setItem.mockClear();
  });

  it('Should update the description of the given index and update localStirage ', () => {
    const todoData = [
      { index: 1, description: 'New Todo Item 1', completed: false },
      { index: 2, description: 'New Todo Item 2', completed: false },
      { index: 3, description: 'New Todo Item 3', completed: false },
    ];

    const index = 2;
    const value = 'New Updated Item';

    const updatedTodo = updateIndex(todoData, index, value);

    expect(updatedTodo).toEqual([
      { index: 1, description: 'New Todo Item 1', completed: false },
      { index: 2, description: 'New Updated Item', completed: false },
      { index: 3, description: 'New Todo Item 3', completed: false },
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'formdata',
      JSON.stringify(updatedTodo),
    );
  });

  it('Should update completed of the given index and update localStirage ', () => {
    const todoData = [
      { index: 1, description: 'New Todo Item 1', completed: false },
      { index: 2, description: 'New Todo Item 2', completed: false },
      { index: 3, description: 'New Todo Item 3', completed: false },
    ];

    const index = 3;
    const value = true;

    const updatedTodo = upDateCompleted(todoData, index, value);

    expect(updatedTodo).toEqual([
      { index: 1, description: 'New Todo Item 1', completed: false },
      { index: 2, description: 'New Todo Item 2', completed: false },
      { index: 3, description: 'New Todo Item 3', completed: true },
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'formdata',
      JSON.stringify(updatedTodo),
    );
  });
  it('Should delete completed task if completed is true and update localStirage ', () => {
    const todoData = [
      { index: 1, description: 'New Todo Item 1', completed: false },
      { index: 2, description: 'New Todo Item 2', completed: true },
      { index: 3, description: 'New Todo Item 3', completed: true },
    ];

    const bool = true;
    const updatedTodo = completedDelete(todoData, bool);

    expect(updatedTodo).toEqual([
      { index: 1, description: 'New Todo Item 1', completed: false },
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'formdata',
      JSON.stringify(updatedTodo),
    );
  });
});