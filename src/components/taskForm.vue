<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newTask" placeholder="I need to ..." />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStore();

    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 100000),
          // there is a chance to get same id number
          // better to use third party library Like uuid
        });
        newTask.value = "";
      }
    };

    return { handleSubmit, newTask };
  },
};
</script>
