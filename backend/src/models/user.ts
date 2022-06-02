import { object, string, InferType } from 'yup';
import { randomUUID } from "crypto";

export const userSchema = object({
  id: string().uuid().required(),
  name: string().required(),
});

export const userCreateSchema = object({
  name: string().required(),
});

export type User = InferType<typeof userSchema>;
export type UserCreate = Omit<User, "id">;

export let users: { [id: string]: User } = {};

export const usersAdd = (userCreate: UserCreate) => {
  const user = {
    id: randomUUID(),
    name: userCreate.name,
  };
  users[user.id] = user;
  return user;
}

export const usersClear = () => {
  users = {};
}

export const usersList = () => {
  return Object.values(users).sort((a, b) => a.name.localeCompare(b.name));
}
