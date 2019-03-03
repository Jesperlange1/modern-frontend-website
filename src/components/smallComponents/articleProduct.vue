<template>
  <article class="article">
    <div class="prices">
      <div class="price" v-bind:class="{ offer: (product.offerPrice != '') }">
        <span class="bill-type">£</span>
        {{product.price}}
      </div>
      <div class="price offer-price">
        <span class="bill-type">£</span>
        {{product.offerPrice}}
      </div>
    </div>
    <div class="img-boxes">
      <img
        class="img-box"
        @click="changeSelectedImage(image.url)"
        v-for="image in product.images"
        :src="image.url"
        :key="image.imageId"
        :alt="image.alt"
      >
    </div>
    <img class="item-focused-image" v-bind:src="selectedImagePath" alt="Main image">
    <div class="article-description">
        <router-link :to="'/product/' + product.id">
      <h5 class="title">{{product.name}}</h5></router-link>
      <p class="description">{{product.shortDescription}}</p>
      <div class="buttons">
        <a href class="add-to-basket">
          <i class="fa fa-shopping-cart"></i>
        </a>
        <a href class="favorite">
          <i class="far fa-heart"></i>
        </a>
        <a href class="save">
          <i class="fa fa-compress-arrows-alt"></i>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: { product: Object },
  data() {
    return {
      selectedImagePath: this.product.images[0].url
    };
  },
  methods: {
    changeSelectedImage: function(newUrl) {
      this.selectedImagePath = newUrl;
    }
  }
};


</script>

<style scoped>
</style>