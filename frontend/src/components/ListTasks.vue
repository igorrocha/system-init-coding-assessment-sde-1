<template>
  <div class="grid grid-cols-1 gap-4">
    <div
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div class="flex-1 min-w-0">
        <p class="text-md font-medium text-gray-900">
          {{ task.task }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
await taskStore.getTasks();
</script>
