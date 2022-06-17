<script setup>
// Shows the current list of tasks for the user
// and allows the user to delete tasks.
import { XIcon } from "@heroicons/vue/solid";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

// When the component is first mounted, we need to get the list of
// tasks for the user for the first time.
await taskStore.getTasks();

// Removes a task by its id and updates the task list.
// Triggered when the user clicks on the 'X' button in a
// task item.
const removeTask = async (taskId) => {
  await taskStore.removeTask(taskId);
};
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <div
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div class="flex justify-between min-w-0 w-full">
        <p class="text-md font-medium text-gray-900">
          {{ task.task }}
        </p>
        <button
          type="button"
          class="hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          @click="
            () => {
              removeTask(task.id);
            }
          "
        >
          <XIcon class="h-8 w-8 text-black-400" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>
