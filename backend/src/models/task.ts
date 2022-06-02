import { object, string, InferType } from 'yup';
import { randomUUID } from "crypto";

export const taskSchema = object({
  id: string().uuid().required(),
  userId: string().uuid().required(),
  task: string().required(),
});

export const taskCreateSchema = object({
  userId: string().uuid().required(),
  task: string().required(),
});

export type Task = InferType<typeof taskSchema>;
export type TaskCreate = Omit<Task, "id">;

export let tasks: { [userId: string]: Task[] } = {};

export const tasksAdd = (taskCreate: TaskCreate) => {
  const task = {
    id: randomUUID(),
    userId: taskCreate.userId,
    task: taskCreate.task,
  };
  if (tasks[task.userId]) {
    tasks[task.userId].push(task);
  } else {
    tasks[task.userId] = [task];
  }
  return task;
}

export const tasksClear = () => {
  tasks = {};
}

export const tasksList = (userId: string) => {
  if (tasks[userId]) {
    return tasks[userId];
  } else {
    return [];
  }
}
