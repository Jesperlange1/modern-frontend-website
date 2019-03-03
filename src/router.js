import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Brand from "./views/Brand.vue";
import Product from "./views/Product.vue";
import SignUp from "./views/SignUp.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Brand",
      name: "brand",
      component: Brand
    },
    {
      path: "/Product/:product_id",
      name: "product",
      component: Product
    },
    {
      path: "/SignUp",
      name: "signup",
      component: SignUp
    },
    {
      path: "/SignIn",
      name: "signin",
      component: SignUp
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});
