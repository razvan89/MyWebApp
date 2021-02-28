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
          <router-link class="btn btn-secondary w-25" to="/">Back</router-link>
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
// import { required, minLength, maxLenght } from 'vuelidate/lib/validators'
// export default {
//     name: 'FormRegistration',
//     data() {
//         return{
//             username:'',
//             email:'',
//             password:'',
//             website:'',
//             phone:''
//         }
//     },
//     validations: {
//         username: {
//             required
            
//         },
//         email:{
//             required
//         },
//         password: {
//            required,
//            minLenght: minLenght(3),
//             maxLenght: maxLenght(10)
//         }

//     }
// };
</script>

<style scoped>
.user-area {
  display: none;
}
</style>