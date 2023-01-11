// The routes for our REST API. It maps the URL to a given
// handler.

import * as Router from "@koa/router";
import { createUser, listUsers } from "./handlers/users";
import {
  createTask,
  listTasks,
  removeTask,
  clearUserTasks,
} from "./handlers/tasks";

export const router = new Router();
router.get("/api/users", listUsers);
router.post("/api/users", createUser);
router.post("/api/tasks", createTask);
router.get("/api/tasks/:userId", listTasks);
router.delete("/api/tasks/:userId/:taskId", removeTask);
router.delete("/api/tasks/:userId", clearUserTasks);
