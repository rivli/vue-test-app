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
  userActions({ commit }, { action, payload }) {
    commit(action, payload);
  },
};

const mutations = {
  addToCart: (state, product) => {
    let oldCart = state.cart;
    oldCart[product.id] = product;
    state.cart = { ...oldCart };
    localStorage.setItem("VTAcart", JSON.stringify(oldCart));
  },
  removeFromCart: (state, productID) => {
    let oldCart = state.cart;
    delete oldCart[productID];
    state.cart = { ...oldCart };
    localStorage.setItem("VTAcart", JSON.stringify(oldCart));
  },
  addToFavorites: (state, product) => {
    let oldFavorites = state.favorites;
    oldFavorites[product.id] = product;
    state.favorites = { ...oldFavorites };
    localStorage.setItem("VTAfavorites", JSON.stringify(oldFavorites));
  },
  removeFromFavorites: (state, productID) => {
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
