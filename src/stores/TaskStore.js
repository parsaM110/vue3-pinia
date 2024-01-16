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
  },
}); // useTaskStore is a function -> use `use` is a naming convention
