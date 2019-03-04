<template>
  <main v-if="product != typeof 'undefined' && typeof product == 'object'">
    <section class="full-width">
      <div
        class="page-title-header background-image"
        v-bind:style="{'background-image':'url(' + 
        require('../assets/Images/header-image2.png') +')'}"
      >
        <h3 class="title">
          <span class="big-text">Product</span> View
        </h3>
        <h4 class="sub-header">
          mens - casuals - {{product.category}} -
          <span class="highlight-text">{{product.name}}</span>
        </h4>
      </div>
    </section>
    <section class="small-width section-top-product">
      <slider :images="product.images"></slider>
      <div class="product-info">
        <h2 class="product-title">{{product.name}}</h2>
        <div
          v-if="product.reviews != typeof 'undefined' && typeof product.reviews == 'object'"
          class="review-line block"
        >
          <div v-for="n in avgReviewScore" :key="n + 'filledStar'" class="star filled">
            <i class="fa fa-star"></i>
          </div>
          <div v-for="i in 5-avgReviewScore" :key="i + 'notFilledStar'" class="star">
            <i class="fa fa-star"></i>
          </div>
          <div class="review-text">{{product.reviews.length}} Review(s)</div>
          <div class="seperator-sign">|</div>
          <div class="add-review">
            <a href="#">Add a Review</a>
          </div>
          <div class="seperator-sign">|</div>
          <div class="share-part">
            share:
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="price-line block">
          <div v-bind:class="{ offer: (product.offerPrice != '')}" class="price">
            <span class="bill-type">£</span>
            {{product.price}}
          </div>
          <div v-if="product.offerPrice != ''" class="price offer-price">
            <span class="bill-type">£</span>
            {{product.offerPrice}}
          </div>
        </div>
        <div class="info-line">
          <h5 class="subject">Availability:</h5>
          <p class="text">In stock</p>
        </div>
        <div class="info-line">
          <h5 class="subject">Product code:</h5>
          <p class="text">#{{product.id}}</p>
        </div>
        <div class="info-line">
          <h5 class="subject">Tags:</h5>
          <p
            v-if=" typeof product.tags == 'object'"
            class="text highlight-text"
          >{{product.tags.toString().replace(",", ", ")}}</p>
        </div>
        <div class="product-text">
          {{product.shortDescription}}
          <ul>
            <li>Elasticated cuffs;</li>
            <li>Casual fit</li>
            <li>100% Cotton</li>
            <li>Free shipping with 4 days delivery</li>
          </ul>
        </div>

        <form class="product-selection-properties">
          <div class="properties">
            <div class="property">
              <h4>Colour</h4>
              <select name="product-colour" id="product-colour">
                <option class="hidden" value>Select Colour</option>
                <option v-for="colour in product.colours" :key="colour" :value="colour">{{colour}}</option>
              </select>
            </div>
            <div class="property">
              <h4>Size</h4>
              <select name="product-size" id="product-size">
                <option class="hidden" value>Select size</option>
                <option v-for="size in product.sizes" :key="size" :value="size">{{size}}</option>
              </select>
            </div>
            <div class="property">
              <h4>Qty</h4>
              <input type="number" value="1" min="1" max="10" name="product-qty" id="product-qty">
            </div>
          </div>
          <div class="button-row">
            <button class="stylish-button" type="submit">
              <i class="fa fa-shopping-cart"></i> Add to Cart
            </button>
            <button class="stylish-button">
              <i class="far fa-heart"></i> Add to Lookbook
            </button>
          </div>
          <a class="compare" href="#">
            <div class="icon">
              <i class="fa fa-compress-arrows-alt"></i>
            </div>Add to Compare
          </a>
        </form>
      </div>
    </section>
    <productTabs :longDescription="product.longDescription"></productTabs>
  </main>
  <main v-else>
    <section class="full-width">
      <div
        class="page-title-header background-image"
        v-bind:style="{'background-image':'url(' + 
        require('../assets/Images/header-image2.png') +')'}"
      >
        <h3 class="title">
          <span class="big-text">No</span> product
        </h3>
        <h4 class="sub-header">
          with this
          <span class="highlight-text">id</span>
        </h4>
      </div>
    </section>
  </main>
</template>
<script>
import axios from "axios";
import slider from "@/components/smallComponents/slider.vue";
import productTabs from "@/components/smallComponents/productTabs.vue";
export default {
  components: {
    slider,
    productTabs
  },
  data() {
    return {
      product: {}
    };
  },
  computed: {
    avgReviewScore: function() {
      var avgScore = 0;
      var reviews = this.product.reviews;
      console.log(reviews);
      for (var i = 0; i < reviews.length; i++) {
        avgScore += reviews[i]["score"];
        console.log(avgScore);
      }
      avgScore = avgScore / reviews.length;
      console.log(avgScore);

      return parseInt(avgScore);
    },
    formattedTags: function() {
      var tags = this.product.tags.toString().replace(",", ", ");

      return tags;
    }
  },

  created() {
    var path = window.location.origin.replace("#", "");
    var productId = this.$route.params.product_id;
    axios
      .get(path + "/db.json")
      .then(response => {
        console.log(productId);
        var data = response.data;
        this.product = data.find(x => x.id == productId);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>
