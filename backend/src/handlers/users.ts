import { Context, Next } from "koa";
import { usersAdd, userCreateSchema, usersList } from "../models/user";

// Create a new user
export const createUser = async (ctx: Context, next: Next) => {
  const userCreate = await userCreateSchema.validate(ctx.request.body);
  const user = usersAdd(userCreate);
  ctx.body = user;
  await next();
};

// List users
export const listUsers = async (ctx: Context, next: Next) => {
  ctx.body = usersList();
  await next();
};
