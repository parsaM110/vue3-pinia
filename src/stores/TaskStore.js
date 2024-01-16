import { defineStore } from "pinia";
// if you dont export it you cant use it in App.vue
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk ", isFav: false },
      { id: 2, title: "buy bread", isFav: true },
    ],
    name: "Yoshi",
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0); // p is the prevous value which we initiate with 0 and c is current value which is from array
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      // if  t.id !== id is true which is for not selected for delete: it stays
      // if  t.id !== id is false which is for selected for delete: it filter out
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    }, // remember   const task is connected to this.tasks it is not a copy
    // for making copy you should do this :
    // const task = {...this.tasks.find((t) => t.id === id)};

    //const taskIndex = this.tasks.findIndex((t) => t.id === id);
    //if (taskIndex !== -1) {
    // const originalTask = { ...this.tasks[taskIndex] };
    //}
  },
}); // useTaskStore is a function -> use `use` is a naming convention
