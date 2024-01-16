import { defineStore } from "pinia";

const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk ", isFav: false },
      { id: 2, title: "buy bread", isFav: true },
    ],
    name: "Yoshi",
  }),
}); // useTaskStore is a function -> use `use` is a naming convention
