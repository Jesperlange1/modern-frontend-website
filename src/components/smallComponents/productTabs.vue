<template>
  <section class="small-width section-bottom-product">
    <div class="button-line">
      <!--  <button class="active btn borderless-button">Description</button> -->
      <button
        @click="selectedTab = tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{active: selectedTab == tab}"
        class="btn borderless-button"
      >{{tab}}</button>
    </div>
    <div v-show="selectedTab == tabs[0]" class="button-result">
      <div class="product-description">
        <h5 class="product-description-header">{{longDescription}}</h5>
        <div class="product-description-text">
          This is different<br>
          Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla
          sapien magna, interdum quis pretium nec, pharetra at felis.
          Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam
          suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et
          dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam
          congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac
          malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus
          lectus. In eget lorem tellus. Quisque eleifend varius nisi nec
          sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus
          lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie
          risus nec fringilla lacinia.
          <br>
          <br>Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget,
          placerat at metus. Proin dictum lobortis velit, id suscipit orci
          faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam
          placerat, id dignissim elit auctor. Vestibulum scelerisque sem et
          lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti.
          Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit.
          Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra.
          Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue
          auctor vulputate. Quisque a convallis diam commodo eget diam id,
          eleifend dictum libero. Etiam varius, nisi vel dignissim sodales,
          enim dui posuere mauris, in aliquet lorem eros eget neque.
        </div>
      </div>
    </div>
    <div
      v-for="(tab, index) in tabs"
      :key="index + tab"
      v-show="!index == 0 && tab == selectedTab"
      class="button-result"
    >
      <div class="product-description">
        <h5 class="product-description-header">This is the {{selectedTab}}</h5>
        <div class="product-description-text">
          Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla
          sapien magna, interdum quis pretium nec, pharetra at felis.
          Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam
          suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et
          dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam
          congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac
          malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus
          lectus. In eget lorem tellus. Quisque eleifend varius nisi nec
          sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus
          lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie
          risus nec fringilla lacinia.
          <br>
          <br>Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget,
          placerat at metus. Proin dictum lobortis velit, id suscipit orci
          faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam
          placerat, id dignissim elit auctor. Vestibulum scelerisque sem et
          lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti.
          Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit.
          Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra.
          Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue
          auctor vulputate. Quisque a convallis diam commodo eget diam id,
          eleifend dictum libero. Etiam varius, nisi vel dignissim sodales,
          enim dui posuere mauris, in aliquet lorem eros eget neque.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    longDescription: ""
  },
  data() {
    return {
      tabs: [
        "Description",
        "Video",
        "Size & Specs",
        "Delivery & Returns",
        "Reviews"
      ],
      selectedTab: "Description"
    };
  }
};
</script>

<style scoped>
</style>