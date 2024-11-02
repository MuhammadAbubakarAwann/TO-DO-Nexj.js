import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchTodos() {
  return await prisma.todo.findMany();
}

export async function createTodo(title) {
  return await prisma.todo.create({ data: { title } });
}

export async function deleteTodoById(id) {
  return await prisma.todo.delete({ where: { id } });
}

export async function updateTodoById(id, newTitle) {
  return await prisma.todo.update({
    where: { id },
    data: { title: newTitle },
  });
}
