<script setup>
// The UI for adding a task.
import { MinusCircleIcon } from "@heroicons/vue/solid";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

// Clears the task list for the current logged in user.
// Triggered when the user hits the 'Clear list' button.
const clearTasks = async () => {
  await taskStore.clearTasks();
};
</script>

<template>
  <button
    v-if="taskStore.tasks.length > 0"
    type="button"
    class="-ml-px inline-flex items-center h-10 space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    @click="clearTasks()"
  >
    <MinusCircleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
    <span>Clear tasks</span>
  </button>
</template>
