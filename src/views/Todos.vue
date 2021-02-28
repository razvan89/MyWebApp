<template>
  <div class="container">
    <div class="row header">
        <b-navbar class="">
          <b-navbar-brand href="/todos">
            <img alt=" logo" class="logo-img" src="..\assets\logo.png" /> My web
            App
          </b-navbar-brand>
        </b-navbar>
        <b-nav-item-dropdown text="Welcome" right class="user-area">
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
    <div class="todos">
      <div class="add-todo">
        <router-link to="/add" >
          <i class="fas fa-plus-circle"></i> Add a new Todo</router-link
        >
      </div>
      <div>
        <b-tabs content-class="mt-5">
          <b-tab title="My Todos" active>
            <table class="table">
              <thead>
                <th>Task Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Delete</th>
              </thead>

              <tbody>
                <tr v-for="(task, index) in allTasks" :key="index + 'todos'">
                  <td>
                    <span>{{ task.name }}</span>
                  </td>
                  <td>
                    <span class="status">{{ task.selected }}</span>
                  </td>
                  <td>
                    <span>{{ task.date }}</span>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger btn-block"
                      @click="deleteTask(index)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table></b-tab
          >
          <b-tab title="My Incompleted Todos">
            <table class="table">
              <thead>
                <th>Task Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Delete</th>
              </thead>

              <tbody>
                <tr v-for="(task, index) in toDo" :key="index + 'incompleted'">
                  <td>
                    <span>{{ task.name }}</span>
                  </td>
                  <td>
                    <span class="status">{{ task.selected }}</span>
                  </td>
                  <td>
                    <span>{{ task.date }}</span>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger btn-block"
                      @click="deleteTask(task)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table></b-tab
          >
          <b-tab title="My Completed Todos">
            <table class="table">
              <thead>
                <th>Task Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Delete</th>
              </thead>

              <tbody>
                <tr v-for="(task, index) in completed" :key="index + 'completed'">
                  <td>
                    <span>{{ task.name }}</span>
                  </td>
                  <td>
                    <span class="status">{{ task.selected }}</span>
                  </td>
                  <td>
                    <span>{{ task.date }}</span>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger btn-block"
                      v-on:click="deleteTask(task)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table></b-tab
          >
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      allTasks: [],
      toDo: [],
      completed: [],
    };
  },
  methods: {
    setToDoList: function () {
      this.toDo = this.$root.tasks.filter((task) => task.selected === "to do");
      this.toDo.sort((a, b) => b.date < a.date ? 1: -1);
    },
    setAllTasks: function () {
      this.allTasks = this.$root.tasks;
      this.allTasks.sort((a, b) => b.date < a.date ? 1: -1);
    },
    setCompletedList: function () {
      this.completed = this.$root.tasks.filter(
        (task) => task.selected === "completed"
      );
      this.completed.sort((a, b) => b.date < a.date ? 1: -1);
    },
    deleteTask: function (taskIndex) {
      this.$root.tasks.splice(taskIndex, 1);
      this.setCompletedList();
      this.setToDoList();
    },
  },
  created() {
    this.setToDoList();
    this.setAllTasks();
    this.setCompletedList();
  },
};
</script>

<style>
</style>