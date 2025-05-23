import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

require("../src/store/subscribe");
require("./mixin.js");
require("./axios.js");


Vue.config.productionTip = false;
store.dispatch('auth/attempt' , localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
