export default {
  namespaced: true,
  state: {
    baseUrl: null,
    mediaUrl: null,
    rowsPerPage: 10,
  },
  getters: {
    mediaUrl(state) {
      return state.mediaUrl;
    },
    baseUrl(state) {
      return state.baseUrl;
    },
    rowsPerPage(state) {
      return state.rowsPerPage;
    },
  },
  mutations: {
    SET_MEDIAURL(state, url) {
      state.mediaUrl = url;
    },
    SET_BASEURL(state, url) {
      state.baseUrl = url;
    },
  },
  actions: {
    setMediaUrl({ commit }, url) {
      commit("SET_MEDIAURL", url);
    },
    setBaseUrl({ commit }, url) {
      commit("SET_BASEURL", url);
    },
  },
};
