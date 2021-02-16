import Vuex from "vuex";
import Vue from "vue";
import products from "./modules/products";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    user,
  },
});
