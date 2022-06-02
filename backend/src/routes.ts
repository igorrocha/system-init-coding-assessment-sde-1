import * as Router from "@koa/router";
import { createUser, listUsers } from "./handlers/users";
import { createTask, listTasks } from "./handlers/tasks";

export const router = new Router();
router.get("/users", listUsers);
router.post("/users", createUser);
router.post("/tasks", createTask);
router.get("/tasks/:userId", listTasks);
