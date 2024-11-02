"use client"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTodos, deleteTodo, startEdit } from '@/app/redux/services/Todo-Slice';
import TodoItem from './Todo-Item';

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todoSlice.items);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (item) => {
    dispatch(startEdit(item));
  };

  return (
    <div className="my-10 mx-auto max-w-lg">
      <h3 className="text-2xl font-semibold text-center mb-5 text-gray-800">Todo List</h3>
      <ul className="space-y-3">
        {items.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
