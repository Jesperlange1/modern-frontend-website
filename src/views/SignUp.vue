<template>
  <main>
    <section class="full-width">
      <div
        class="page-title-header background-image"
        v-bind:style="{'background-image':'url(' + 
        require('../assets/Images/header-image2.png') +')'}"
      >
        <h3 class="title">
          <span class="big-text">Welcome</span> To Ave
        </h3>
        <h4 class="sub-header">Sign in or Register</h4>
      </div>
    </section>
    <section class="signup-section small-width">
      <div class="columns">
        <div class="left-column">
          <h2 class="header-text">Sign in</h2>
          <div v-if="errorsLogin.length">
            <ul>
              <li v-for="error in errorsLogin" :key="error + ' this is for register' ">{{ error }}</li>
            </ul>
          </div>
          <form class="sign-in" @submit.prevent="checkFormLogin">
            <input
              :class="{ error: (loginEmailError)}"
              name="email-login"
              v-model="login.email"
              type="text"
              placeholder="Your Email."
            >
            <input
              name="password-login"
              v-model="login.password"
              type="password"
              placeholder="Your password."
              :class="{ error: (loginPasswordError)}"
            >
            <div class="button-line columns">
              <div class="left-column">
                <button type="submit" class="stylish-button">Sign in</button>
              </div>
              <div class="right-column">
                <div class="forgotten-password">
                  <a class="highlight-text">
                    Forgot your Password
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="right-column">
          <form class="sign-up" @submit.prevent="checkFormSignUp">
            <h2 class="header-text">Register</h2>
            <div v-if="errorsSignUp.length">
              <ul>
                <li
                  v-for="error in errorsSignUp"
                  :key="error + ' this is for register' "
                >{{ error }}</li>
              </ul>
            </div>
            <input
              :class="{ error: (signUpEmailError)}"
              v-model="signUp.email"
              name="email-signUp"
              type="text"
              placeholder="Your Email."
            >
            <input
              :class="{ error: (signUpPasswordError)}"
              v-model="signUp.password"
              name="password-signUp"
              type="password"
              placeholder="Your password."
            >
            <input
              :class="{ error: (signUpPasswordCheckError)}"
              v-model="signUp.passwordCheck"
              name="password-check-signUp"
              type="password"
              placeholder="Confirm password."
            >
            <div class="block newsletter-line">
              <div class="newsletter-checkbox">
                <input name="newsletter" type="checkbox">
              </div>

              <label class="newsletter-text" for="newsletter">
                Sign up for exclusive updates, discounts, new arrivals,
                contests, and more!
              </label>
            </div>
            <div class="button-line columns">
              <div class="left-column">
                <button type="submit" class="stylish-button">Create account</button>
              </div>
              <div class="right-column">
                <div class="forgotten-password privacy">
                  <a>
                    By clicking 'Create Account', you agree to our
                    <span class="highlight-text">
                      Privacy Policy
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      errorsLogin: [],
      errorsSignUp: [],

      login: { email: "", password: "" },
      signUp: { email: "", password: "", passwordCheck: "" },
      loginEmailError: false,
      loginPasswordError: false,
      signUpEmailError: false,
      signUpPasswordError: false,
      signUpPasswordCheckError: false
    };
  },
  methods: {
    checkFormLogin: function(e) {
      this.errorsLogin = [];
      if (this.login.email == "") {
        this.errorsLogin.push("Email required.");
        this.loginEmailError = true;
      } else if (
        !this.login.email.includes("@") ||
        this.login.email.includes(" ")
      ) {
        this.errorsLogin.push("Type a correct email.");
        this.loginEmailError = true;
      } else {
        this.loginEmailError = false;
      }

      if (this.login.password == "") {
        this.errorsLogin.push("Password required.");
        this.loginPasswordError = true;
      } else {
        this.loginPasswordError = false;
      }
      if (!this.loginEmailError && !this.loginPasswordError) {
        return true;
      }
    },
    checkFormSignUp: function(e) {
      this.errorsSignUp = [];

      if (this.signUp.email == "") {
        this.errorsSignUp.push("Email required.");
        this.signUpEmailError = true;
      } else if (
        !this.signUp.email.includes("@") ||
        this.signUp.email.includes(" ")
      ) {
        this.errorsSignUp.push("Type a correct email.");
        this.signUpEmailError = true;
      } else {
        this.signUpEmailError = false;
      }

      if (this.signUp.password == "" && this.signUp.passwordCheck == "") {
        this.errorsSignUp.push("Password required.");
        this.signUpPasswordError = true;
        this.signUpPasswordCheckError = true;
      } else if (this.signUp.password == "") {
        this.errorsSignUp.push("Password required.");
        this.signUpPasswordError = true;
        this.signUpPasswordCheckError = false;
      } else if (this.signUp.passwordCheck == "") {
        this.errorsSignUp.push("Password required.");
        this.signUpPasswordError = false;
        this.signUpPasswordCheckError = true;
      } else if (this.signUp.passwordCheck == "") {
        this.errorsSignUp.push("Passwords are not the same");
        this.signUpPasswordError = true;
        this.signUpPasswordCheckError = true;
      } else {
        this.signUpPasswordError = false;
        this.signUpPasswordCheckError = false;
      }
      if (
        !this.signUpEmailError &&
        !this.signUpPasswordError &&
        !this.signUpPasswordCheckError
      ) {
        return true;
      }
    }
  }
};
</script>

<style scoped>
</style>