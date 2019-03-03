<template>
  <main>
    <section class="slider section full-width">
      <div
        class="slider-image background-image"
        v-bind:style="{'background-image':'url(' + 
        require('../assets/Images/header-image.png') +')'}"
      >
        <button class="stylish-button">Shop men's collection</button>
      </div>
    </section>
    <div class="seperator medium-width"></div>
    <section class="article-section section medium-width">
      <nav class="nav article-nav">
        <a class="btn item" href="#">Popular</a>
        <a class="btn item" href="#">New arrivals</a>
        <a class="btn item" href="#">Best sellers</a>
        <a class="btn item" href="#">Special offers</a>
        <a class="btn item" href="#">Coming soon</a>
      </nav>
      <div class="items columns">
        <div class="left-column">
          <div class="articles2">
            <articleProduct v-if="sortedProducts[0] != typeof 'undefined' && sortedProducts.length > 0" :product="sortedProducts[0]"></articleProduct>

           <articleProduct v-if="sortedProducts[1] != typeof 'undefined' && sortedProducts.length > 0" :product="sortedProducts[1]"></articleProduct>
          </div>
           <articleProduct v-if="sortedProducts[2] != typeof 'undefined' && sortedProducts.length > 0" :product="sortedProducts[2]"></articleProduct>
        </div>
        <div class="right-column">
           <articleProduct v-if="sortedProducts[3] != typeof 'undefined' && sortedProducts.length > 0" :product="sortedProducts[3]"></articleProduct>
          <div class="articles2">
            <articleProduct v-if="sortedProducts[4] != typeof 'undefined' && sortedProducts.length > 0" :product="sortedProducts[4]"></articleProduct>
            <articleProduct v-if="sortedProducts[5] != typeof 'undefined' && sortedProducts.length > 0" :product="sortedProducts[5]"></articleProduct>
          </div>
        </div>
      </div>
    </section>
    <section class="lookbook-section section full-width">
      <article class="men-lookbook lookbook">
        <img class="lookbook-image" src="../assets/Images/photo-silhouette.png">
        <div class="lookbook-details">
          <h5 class="header">Men's</h5>
          <h5 class="sub-header">Lookbook</h5>
          <p class="description">
            Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing
            elit lor, integer lorem consecteur dignissim laciniqui. Elementum
            metus facilisis ut phasellu.
          </p>
          <button class="stylish-button">View now</button>
        </div>
      </article>
      <article class="women-lookbook lookbook">
        <img class="lookbook-image" src="../assets/Images/photo-silhouette.png">
        <div class="lookbook-details">
          <h5 class="header">Women's</h5>
          <h5 class="sub-header">Lookbook</h5>
          <p class="description">
            Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing
            elit lor, integer lorem consecteur dignissim laciniqui. Elementum
            metus facilisis ut phasellu.
          </p>
          <button class="stylish-button">View now</button>
        </div>
      </article>
      <article class="your-lookbook lookbook">
        <img class="lookbook-image" src="../assets/Images/photo-silhouette.png">
        <div class="lookbook-details">
          <h5 class="header">Your's</h5>
          <h5 class="sub-header">Lookbook</h5>
          <p class="description">
            Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing
            elit lor, integer lorem consecteur dignissim laciniqui. Elementum
            metus facilisis ut phasellu.
          </p>
          <button class="stylish-button">View now</button>
        </div>
      </article>
    </section>
  </main>
</template>
<script>
import axios from "axios";
import ArticleProduct from "@/components/smallComponents/articleProduct.vue";
/* import db from "@/db.json"; */
export default {
  components: {
    ArticleProduct
  },
  data() {
    return {
      products: [],
      imgPath: require("../assets/products/Men/prod1-img1.jpg"),
      imgPath2: require("../assets/products/Men/prod1-img2.jpg")
    };
  },
  computed: {
    sortedProducts: function() {
      console.log("updated sorted products");
      console.log(this.products);
      return this.products;
    }
  },
  created() {
    var path = window.location.href.replace('#', '');

    axios
      .get(path + "/db.json")
      .then(response => {
        
        this.products = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>
