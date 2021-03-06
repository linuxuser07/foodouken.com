import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: true,
  orgData: {
    custom: {
      address: {},
      details: {}
    }
  },
  shopSlug: ''
};

// getters
const getters = {
  getOrgData(state) {
    return state.orgData;
  },
  getOpeningHours(state) {
    return state.orgData.custom.openingHours;
  },
  getLoading(state) {
    return state.loading;
  },
  getDeliveryFee(state) {
    return state.orgData.custom.deliveryFee;
  },
  getTaxRate(state) {
    return state.orgData.custom.taxRate;
  }
};

// actions
const actions = {
  fetchShopData({ commit }, slug) {
    commit('setshopSlug', slug);
    return new Promise((resolve, reject) => {
      httpClient.get(`/pages/slug/foodouken/${slug}/shop`).then(
        response => {
          commit('loadOrgData', response.data);
          commit('changeshopLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeshopLoading', false);
          reject(error);
        }
      );
    });
  }
};

// mutations
const mutations = {
  loadOrgData(state, payload) {
    state.orgData = payload;
  },
  changeshopLoading(state, payload) {
    state.loading = payload;
  },
  setshopSlug(state, payload) {
    state.shopSlug = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
