import axios from "axios";
import types from "../types";

const state = {
  products: [],
  categories: [],
};

const getters = {
  allProducts: (state) => state.products,
  allCategories: (state) => state.categories,
};

const actions = {
  async fetchProducts({ commit }) {
    const res = await axios.get("https://fakestoreapi.com/products");

    commit(types.products.SET_PRODUCTS, res.data);
  },
  async fetchCategories({ commit }) {
    const res = await axios.get("https://fakestoreapi.com/products/categories");

    commit(types.products.SET_CATEGORIES, res.data);
  },
  async fetchCategoryProducts({ commit }, category) {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/" + category
    );

    commit(types.products.SET_PRODUCTS, res.data);
  },
};

const mutations = {
  [types.products.SET_PRODUCTS](state, products) {
    state.products = products;
  },
  [types.products.SET_CATEGORIES](state, categoies) {
    state.categories = categoies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
