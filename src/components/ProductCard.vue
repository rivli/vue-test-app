<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-card-title
        v-text="product.title"
        v-bind="attrs"
        v-on="on"
      ></v-card-title>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ product.title }}</span>
        <v-spacer></v-spacer>

        <v-btn
          icon
          v-if="isInFavorites"
          v-on:click="removeFromFavorites(product)"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon v-else v-on:click="addToFavorites(product)">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-img :src="product.image" max-height="300" contain></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <h3>Price: ${{ product.price }}</h3>
            <h3>Description:</h3>
            <p>
              {{ product.description }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="pink"
          text
          v-if="isInCart"
          v-on:click="removeFromCart(product)"
        >
          Remove From card
        </v-btn>
        <v-btn color="indigo" text v-else v-on:click="addToCart(product)">
          Add to card
        </v-btn>
        <v-btn color="darken-1" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ProductCard",
  props: [
    "product",
    "addToCart",
    "removeFromCart",
    "addToFavorites",
    "removeFromFavorites",
    "isInFavorites",
    "isInCart",
  ],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
