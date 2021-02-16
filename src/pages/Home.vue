<template>
  <div>
      <v-tabs fixed-tabs class="tab-menu">
          <v-tab to="/">All</v-tab>
          <v-tab v-for="category in allCategories" :key="category" :to="'/category/'+category">{{category}}</v-tab>
      </v-tabs>
      <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  methods: {
      ...mapActions(['fetchCategories'])
  },
  computed: mapGetters(['allCategories']),
  created() {
      this.fetchCategories();
  }
};
</script>

<style scoped>
.tab-menu {
    margin-bottom: 30px;
}
</style>
