import { defineStore } from "pinia";
import { mande } from "mande";
import { useUserStore } from "./user";

export const taskApi = mande("/api/tasks");

export interface Task {
  id: string;
  userId: string;
  task: string;
}

export interface TaskStore {
  tasks: Task[];
}

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
  }),
  actions: {
    async getTasks() {
      const userStore = useUserStore();
      if (userStore.user) {
        this.tasks = await taskApi.get(userStore.user.id);
      } else {
        this.tasks = [];
      }
    },
    async addTask(task: string) {
      const userStore = useUserStore();
      if (userStore.user) {
        await taskApi.post({ userId: userStore.user.id, task });
        await this.getTasks();
      } else {
        console.log("Cannot add a task without a logged in user; bug!");
      }
    },
    clear() {
      this.tasks = [];
    },
  },
});
