<script setup lang="ts">
import SignIn from "@/components/SignIn.vue";
import TasklyMain from "@/components/TasklyMain.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <template v-if="!userStore.user">
    <SignIn />
  </template>
  <template v-else>
    <TasklyMain />
  </template>
</template>
