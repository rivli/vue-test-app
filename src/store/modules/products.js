import axios from "axios";

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

    commit("setProducts", res.data);
  },
  async fetchCategories({ commit }) {
    const res = await axios.get("https://fakestoreapi.com/products/categories");

    commit("setCategories", res.data);
  },
  async fetchCategoryProducts({ commit }, category) {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/" + category
    );

    commit("setProducts", res.data);
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setCategories: (state, categoies) => (state.categories = categoies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
