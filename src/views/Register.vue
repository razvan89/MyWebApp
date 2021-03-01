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
      <b-form class="col-md-6 login-register">
        <div class="logo-oracle">
          <img alt=" logo" src="..\assets\logo.png" />
        </div>
        <div class="d-flex register-rows">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Username *"
              required="true"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Email *"
              required="true"
            />
          </div>
        </div>
        <div class="d-flex register-rows">
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Password *"
              required="true"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Re-type Password *"
              required="true"
            />
          </div>
        </div>
        <div class="d-flex register-rows">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Website"
            />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Phone" />
          </div>
        </div>
        <div
          class="login-panel alert alert-primary"
          role="alert"
          :style="{ opacity: isAlertShow ? 1 : 0 }"
        >
          Registration successful. <small>Waiting for redirect.</small>
          <loader-component width="10"></loader-component>
        </div>
        <div class="form-group d-flex login-buttons">
          <router-link class="btn btn-secondary " to="/">Back</router-link>
          <button
            type="submit"
            class="btn btn-primary "
            id="register"
            @click.prevent="register"
            v-if="!isRegister"
          >
            Register
          </button>
          <button
            class="btn btn-primary "
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
</template>

<script>
import LoaderComponent from "../components/LoadingComponent";
import { setTimeout } from "timers";

export default {
  components: { LoaderComponent },
  data() {
    return {
      isAlertShow: false,
      isRegister: false,
      email: "",
    };
  },
  methods: {
    register() {
      this.isRegister = true;
      setTimeout(() => {
        this.isRegister = false;
        this.isAlertShow = true;
        setTimeout(() => this.redirectRegister(), 1000);
      }, 1000);
    },
    redirectRegister() {
      this.$router.push({ name: "login" });
    },
  },
};

</script>

<style scoped>
  .user-area {
    display: none;
  }
</style>