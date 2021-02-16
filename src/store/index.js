import Vuex from "vuex";
import Vue from "vue";
import products from "./modules/products";
import user from "./modules/user";
import types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      isShown: false,
      timeout: 2000,
      text: "",
    },
  },
  getters: {
    snackbar: (state) => state.snackbar,
  },
  actions: {
    setSnackbar: ({ commit }, { text, timeout }) => {
      commit(types.snackbar.SET_SNACKBAR, text, timeout);
    },
  },
  mutations: {
    [types.snackbar.SET_SNACKBAR](state, text, timeout = 2000) {
      state.snackbar = {
        isShown: true,
        text,
        timeout,
      };
    },
  },
  modules: {
    products,
    user,
  },
});
