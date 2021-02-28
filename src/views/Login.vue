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
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            v-model="email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required
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
            @click.prevent="login"
            v-if="!isLoggingIn"
          >
            Login
          </button>
          <button
            class="btn btn-primary w-25"
            disabled
            @click.prevent="login"
            v-if="isLoggingIn"
          >
            <loader-component width="10"></loader-component>
          </button>
          <button
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
.user-area{
  display: none !important;
}
</style>