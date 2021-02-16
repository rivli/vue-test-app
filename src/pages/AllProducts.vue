<template>
  <div>
      <Products v-bind:products="allProducts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Products from "../components/Products";

export default {
  name: 'AllProducts',
  components: {
      Products
  },
  methods: {
      ...mapActions(['fetchProducts'])
  },
  computed: mapGetters(['allProducts']),
  created() {
      this.fetchProducts();
  }
};
</script>
