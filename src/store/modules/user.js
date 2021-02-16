import types from "../types";

const cart = localStorage.VTAcart ? JSON.parse(localStorage.VTAcart) : {};
const favorites = localStorage.VTAfavorites
  ? JSON.parse(localStorage.VTAfavorites)
  : {};

const state = {
  favorites,
  cart,
};

const getters = {
  allFavorites: (state) => state.favorites,
  allCart: (state) => state.cart,
  isProductInCart: (state) => (id) => {
    return state.cart[id] ? true : false;
  },
  isProductInFavorites: (state) => (id) => {
    return state.favorites[id] ? true : false;
  },
  totalAmountOf: (state) => (id) => {
    return Object.keys(state[id]).length;
  },
  cartTotalAmount: (state) => {
    let payload = 0;
    Object.keys(state.cart).map((key) => {
      payload += state.cart[key].price;
    });
    return payload;
  },
  isFavoritesEmpty: (state) => {
    return Object.keys(state.favorites).length === 0;
  },
};

const actions = {
  addToCart({ commit, dispatch }, payload) {
    commit(types.user.ADD_TO_CART, payload);
    dispatch("setSnackbar", { text: payload.title + " added to cart" });
  },
  removeFromCart({ commit, dispatch }, payload) {
    commit(types.user.REMOVE_FROM_CART, payload.id);
    dispatch("setSnackbar", { text: payload.title + " removed from cart" });
  },
  addToFavorites({ commit, dispatch }, payload) {
    commit(types.user.ADD_TO_FAVORITES, payload);
    dispatch("setSnackbar", { text: payload.title + " added to favorites" });
  },
  removeFromFavorites({ commit, dispatch }, payload) {
    commit(types.user.REMOVE_FROM_FAVORITES, payload.id);
    dispatch("setSnackbar", {
      text: payload.title + " removed from favorites",
    });
  },
};

const mutations = {
  [types.user.ADD_TO_CART]: (state, product) => {
    let oldCart = state.cart;
    oldCart[product.id] = product;
    state.cart = { ...oldCart };
    localStorage.setItem("VTAcart", JSON.stringify(oldCart));
  },
  [types.user.REMOVE_FROM_CART]: (state, productID) => {
    let oldCart = state.cart;
    delete oldCart[productID];
    state.cart = { ...oldCart };
    localStorage.setItem("VTAcart", JSON.stringify(oldCart));
  },
  [types.user.ADD_TO_FAVORITES]: (state, product) => {
    let oldFavorites = state.favorites;
    oldFavorites[product.id] = product;
    state.favorites = { ...oldFavorites };
    localStorage.setItem("VTAfavorites", JSON.stringify(oldFavorites));
  },
  [types.user.REMOVE_FROM_FAVORITES]: (state, productID) => {
    let oldFavorites = state.favorites;
    delete oldFavorites[productID];
    state.favorites = { ...oldFavorites };
    localStorage.setItem("VTAfavorites", JSON.stringify(oldFavorites));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
