import { defineStore } from "pinia";
import { mande } from "mande";

export const userApi = mande("/api/users");

export interface User {
  id: string;
  name: string;
}

export interface UserState {
  user: User | null;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    user: null,
  }),
  actions: {
    async signIn(name: string) {
      this.user = await userApi.post({ name });
    },
    clear() {
      this.user = null;
    },
  },
});
