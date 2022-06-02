import { tasksClear } from "./models/task";
import { usersClear } from "./models/user";

export const clearState = () => {
  usersClear();
  tasksClear();
}
