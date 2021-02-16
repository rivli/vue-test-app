<template>
  <div>
    <h1>Favorites</h1>
      <Products v-bind:products="allFavorites" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Products from "../components/Products";

export default {
  name: 'AllFavorites',
  components: {
      Products
  },
  computed: mapGetters(['allFavorites'])
};
</script>
