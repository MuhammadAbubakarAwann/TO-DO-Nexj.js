"use client"

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, cancelEdit } from '@/app/redux/services/Todo-Slice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const editingTodo = useSelector((state) => state.todoSlice.editingTodo);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setInputValue(editingTodo.title);
    } else {
      setInputValue('');
    }
  }, [editingTodo]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (editingTodo) {
        dispatch(editTodo({ id: editingTodo.id, newTitle: inputValue }));
      } else {
        dispatch(addTodo(inputValue));
      }
      setInputValue('');
    }
  };

  const handleCancelEdit = () => {
    dispatch(cancelEdit());
    setInputValue('');
  };

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-blue-500 py-2">
          <div className="flex-shrink-0 p-2 text-blue-500 rounded-l">
            <i className="fas fa-book"></i>
          </div>
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Add todo item"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
          >
            {editingTodo ? 'Edit' : 'Add'}
          </button>
          {editingTodo && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="flex-shrink-0 text-gray-500  hover:text-black py-1 px-2 rounded ml-2"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
