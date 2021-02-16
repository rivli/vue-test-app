<template>
  <v-app>
    <v-app-bar app color="cyan" dark>
      <v-container>
        <v-row align="center">
          <v-toolbar-title
            ><router-link to="/" class="logo"
              >Vue Test App</router-link
            ></v-toolbar-title
          >

          <v-spacer></v-spacer>
          <FavoritesDropdown />

          <v-btn icon to="/cart" title="cart">
            <v-badge
              color="pink"
              :content="totalAmountOf('cart')"
              :value="cartTotalAmount"
              bottom
            >
              <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
          </v-btn>
          <v-btn text disabled light>${{ cartTotalAmount }}</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer padless style="margin-top: 30px">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vue Test App</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import FavoritesDropdown from "./components/FavoritesDropdow";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    FavoritesDropdown,
  },
  computed: mapGetters(["cartTotalAmount", "totalAmountOf"]),
};
</script>

<style scoped>
.logo {
  text-decoration: none;
  color: white;
}
</style>
