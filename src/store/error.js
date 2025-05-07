export default {
  namepaced: true,
  state: {
    error: {},
    status: null,
  },
  getters: {
    getError(state) {
      return state.error;
    },
    getStatus(state) {
      return state.status;
    },
  },
  mutations: {
    SET_ERROR(state, data) {
      state.error = data;
    },
    SET_STATUS(state, data) {
      state.status = data;
    },
  },
  actions: {
    setError({ commit }, errors) {
      commit("SET_ERROR", errors);
    },
    setStatus({ commit }, status) {
      commit("SET_STATUS", status);
    },
  },
};
