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
    <h1 class="addTodoTitle">Add a new Todo</h1>
    <br /><br />
    <form v-on:submit="addTask">
      <div
        class="d-flex justify-content-center align-content-center add-row form-group"
      >
        <label for="new-todo" class="col-md-2 text-left">Todo Name: </label>
        <b-form-input
          id="new-todo"
          v-model="name"
          placeholder="Enter Todo"
        ></b-form-input>
      </div>

      <div
        class="d-flex justify-content-center align-content-center add-row form-group"
      >
        <label for="datepicker" class="col-md-2 text-left">Due date: </label>
        <b-form-datepicker
          id="datepicker"
          v-model="date"
          class="mb-2"
        ></b-form-datepicker>
      </div>
      <div
        class="d-flex justify-content-center align-content-center add-row form-group"
      >
        <label for="todo-status" class="col-md-2 text-left">Status: </label>
        <b-form-select
          id="todo-status"
          v-model="selected"
          :options="options"
        ></b-form-select>
        <div class="mt-3"></div>
      </div>
      <div
        class="d-flex justify-content-center align-content-center add-row form-group"
      >
        <input
          type="submit"
          value="Add Todo"
          class="btn btn-primary btn-block w-25"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      date: "",
      selected: null,
      options: [
        { value: null, text: "Choose status" },
        { value: "to do", text: "to do" },
        { value: "completed", text: "completed" },
      ],
      tasks: [],
    };
  },
  methods: {
    addTask: function (e) {
      e.preventDefault();
      if (this.name !== "" && this.date != "" && this.selected != null) {
        this.$root.tasks.push({
          date: this.date,
          name: this.name,
          selected: this.selected,
        });
        this.clearForm();
        this.$router.push({ path: "/todos" });
      }
      
    },
    clearForm: function () {
      this.name = "";
      this.date = "";
      this.selected = null;
    },

  },
  created() {
    this.tasks = this.$root.tasks;
  },
};
</script>

<style>
</style>