<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/style.scss";
</style>
