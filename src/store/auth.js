/* eslint-disable */
import axios from "axios";
export default {
  namespaced: true,
  state: {
    token: "",
    user: {},
    company: {},
  },
  getters: {
    authenticated(state) {
      return state.token ? true : false;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, data) {
        console.log('for Token' , data);
      state.token = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_COMPANY(state, data) {
      state.company = data;
    },
  },
  actions: {
    async logIn({ dispatch }, payload) {
        const response = await axios.post("/login", payload);
        if (response.data.success == true) {
          await dispatch("attempt", response.data.token);
        }
    
    },
    async attempt({ state, commit }, token) {
        console.log('call');
     if(token) commit("SET_TOKEN", token);
      if (!state.token) return;
      try {
        let meResponse = await axios.get("/me");
        console.log('meResponse' , meResponse.data.data);
        commit("SET_USER", meResponse.data.data);
      } catch (error) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        commit("SET_COMPANY", null);
      }
    },
  },
};
