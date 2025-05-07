import Vue from "vue";
import Vuex from "vuex";
import error from "./error";
import setting from "./setting";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    error,
    auth,
    setting,
  },
});
