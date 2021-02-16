<template>
  <v-row>
    <v-col v-if="products.length === 0" class="loader">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-col>

    <Product
      v-else
      v-for="product in products"
      v-bind:product="product"
      :key="product.id"
    />
  </v-row>
</template>

<script>
import Product from "./Product";
export default {
  name: "Products",
  components: {
    Product,
  },
  props: ["products"],
};
</script>

<style scoped>
.loader {
  text-align: center;
}
</style>
