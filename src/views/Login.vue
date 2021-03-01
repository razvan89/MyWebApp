<template>
  <div class="container">
    <div class="row header">
      <b-navbar class="">
        <b-navbar-brand href="/">
          <img alt=" logo" class="logo-img" src="..\assets\logo.png" /> My web
          App
        </b-navbar-brand>
      </b-navbar>
    </div>
    <div class="d-flex center align-content-center">
      <div class="col-md-6 login-register">
        <img alt=" logo" src="..\assets\logo.png" />
        <b-form @submit.prevent="login">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required="true"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required="true"
            />
          </div>
          <div class="text-left">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="remember me"
              class="mr-1"
            />
            <label for="remember"> Remember me</label>
          </div>
          <div>
            <a href="#" class="center">Login using social account</a>
          </div>
          <div
            class="login-panel alert alert-primary"
            role="alert"
            :style="{ opacity: isAlertShow ? 1 : 0 }"
          >
            Login successfully. <small>Waiting for redirect.</small>
            <loader-component width="30"></loader-component>
          </div>
          <div class="form-group d-flex login-buttons">
            <button
              class="btn btn-primary w-25"
              id="login"
              type="submit"
              v-if="!isLoggingIn"
            >
              Login
            </button>
            <button
              type="submit"
              class="btn btn-primary w-25"
              disabled
              v-if="isLoggingIn"
            >
              <loader-component width="10"></loader-component>
            </button>
            <button
              type="submit"
              class="btn btn-primary w-25"
              id="register"
              @click.prevent="register"
              v-if="!isRegister"
            >
              Register
            </button>
            <button
              class="btn btn-primary w-25"
              disabled
              @click.prevent="register"
              v-if="isRegister"
            >
              <loader-component width="10"></loader-component>
            </button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderComponent from "../components/LoadingComponent";
import { setTimeout } from "timers";

export default {
  components: { LoaderComponent },
  data() {
    return {
      isLoggingIn: false,
      isAlertShow: false,
      isRegister: false,
      email: "",
    };
  },
  methods: {
    login() {
      console.log(this.email);
      let username = this.getUserName();
      this.$root.username = username;
      this.isLoggingIn = true;
      setTimeout(() => {
        this.isLoggingIn = false;
        this.isAlertShow = true;
        setTimeout(() => this.redirectLogin(), 1000);
      }, 1000);
    },
    redirectLogin() {
      this.$router.push({ name: "todos" });
    },
    getUserName() {
      if (this.email && this.email.includes("@")) {
        return this.email.slice(0, this.email.indexOf("@"));
      } else return "user";
    },
    register() {
      this.isRegister = true;
      setTimeout(() => {
        this.isRegister = false;
        setTimeout(() => this.redirectRegister(), 0);
      }, 0);
    },
    redirectRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.user-area {
  display: none !important;
}
</style>