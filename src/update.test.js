const deleteItem = (todoList, index) => {
  todoList = todoList.filter((todo) => todo.index !== parseInt(index, 10));
  localStorage.setItem('formdata', JSON.stringify(todoList));
  return todoList;
};

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;

describe('deleteItem', () => {
  beforeEach(() => {
    // Clear localStorage mock before each test
    localStorage.setItem.mockClear();
  });

  it('should remove the item with the given index from the todo list and update localStorage', () => {
    // Arrange
    const todoList = [
      { index: 1, task: 'Task 1' },
      { index: 2, task: "Task 2" },
      { index: 3, task: "Task 3" },
    ];
    const indexToDelete = "2";

    // Act
    const updatedTodoList = deleteItem(todoList, indexToDelete);

    // Assert
    expect(updatedTodoList).toEqual([
      { index: 1, task: "Task 1" },
      { index: 3, task: "Task 3" },
    ]);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "formdata",
      JSON.stringify(updatedTodoList),
    );
  });

});
