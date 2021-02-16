<template>
  <v-menu bottom :offset-y="true" max-width="300">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon title="favorites" v-bind="attrs" v-on="on">
        <v-badge
          color="pink"
          :content="totalAmountOf('favorites')"
          :value="!isFavoritesEmpty"
          bottom
        >
          <v-icon>mdi-heart-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list v-if="!isFavoritesEmpty">
      <v-list-item v-for="product in allFavorites" :key="product.id">
        <v-list-item-icon>
          <v-img
            :alt="`${product.title} avatar`"
            :src="product.image"
            max-height="100"
            max-width="50"
            contain
          ></v-img>
        </v-list-item-icon>
        <v-list-item-title>{{ product.title }}</v-list-item-title>
        <v-spacer></v-spacer>

        <v-btn
          icon
          title="remove"
          v-on:click="
            userActions({ action: 'removeFromFavorites', payload: product.id })
          "
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <v-list v-else>
      <v-list-item>
        You have no favorites
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FavoritesDropdown",
  computed: mapGetters(["allFavorites", "isFavoritesEmpty", "totalAmountOf"]),
  methods: mapActions(["userActions"]),
};
</script>
