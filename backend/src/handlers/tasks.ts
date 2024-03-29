// The REST handlers for tasks.

import { Context, Next } from "koa";
import {
  tasksAdd,
  taskCreateSchema,
  tasksList,
  tasksRemove,
  tasksClearByUser,
} from "../models/task";

// Create a new task. The body of the request is an object that matches
// the `TaskCreate` interface.
export const createTask = async (ctx: Context, next: Next) => {
  const createTask = await taskCreateSchema.validate(ctx.request.body);
  const task = tasksAdd(createTask);
  ctx.body = task;
  await next();
};

// List the tasks for a user. The userId parameter is the
// userId of the users whose tasks you want to list.
export const listTasks = async (ctx: Context, next: Next) => {
  ctx.body = tasksList(ctx.params.userId);
  await next();
};

// Remove a task given its userId and taskId
export const removeTask = async (ctx: Context, next: Next) => {
  tasksRemove(ctx.params.userId, ctx.params.taskId);
  ctx.body = {};
  await next();
};

// Removes all tasks of a given user.
export const clearUserTasks = async (ctx: Context, next: Next) => {
  tasksClearByUser(ctx.params.userId);
  ctx.body = {};
  await next();
};
