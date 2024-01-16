<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        {{ task.title }}
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
export default {
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
