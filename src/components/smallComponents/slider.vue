<template>
  <div v-if="typeof images == 'object'" class="slider">
    <div @click="changeSelectedImage(selectedImage -1)" class="slider__arrow arrow--left">
      <i class="fas fa-angle-left"></i>
    </div>
    <img  :src="images[selectedImage].url" alt="Product image">
    <div @click="changeSelectedImage(selectedImage +1)" class="slider__arrow arrow--right">
      <i class="fas fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
   props: { images: Array },
  data() {
    return {
      selectedImage: 0
    };
  },
  methods: {
    changeSelectedImage: function(index) {
      console.log(index);

      if (this.images.length > index && index >= 0) {
        this.selectedImage = index;
      } else if (this.images.length <= index) {
        this.selectedImage = 0;
      } else {
        this.selectedImage = this.images.length - 1;
      }
      console.log(this.selectedImage);
    }
  }
};
</script>

<style scoped>
</style>