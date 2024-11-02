// pages/api/todos.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
      }
      break;

    case 'POST':
      const { title } = req.body;
      try {
        const newTodo = await prisma.todo.create({ data: { title } });
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create todo' });
      }
      break;

    case 'DELETE':
      const { id } = req.body;
      try {
        await prisma.todo.delete({ where: { id } });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
      }
      break;

    case 'PUT':
      const { id: updateId, newTitle } = req.body;
      try {
        const updatedTodo = await prisma.todo.update({
          where: { id: updateId },
          data: { title: newTitle },
        });
        res.status(200).json(updatedTodo);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
