<template>
  <div>
      <Products v-bind:products="allProducts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Products from "../components/Products";

export default {
  name: 'Category',
  components: {
      Products
  },
  methods: {
      ...mapActions(['fetchCategoryProducts'])
  },
  computed: mapGetters(['allProducts']),
  created() {
      this.fetchCategoryProducts(this.$route.params.id);
  },
  watch: {
    $route(to) {
      this.fetchCategoryProducts(to.params.id);
    }
  }
};
</script>
