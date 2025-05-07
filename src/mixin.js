import Vue from "vue";
import { mapGetters } from "vuex";
const mixin = {
    install(Vue){
        Vue.mixin({
            computed:{
                ...mapGetters({
                 MediaUrl: "setting/mediaUrl",
                 user: "auth/getUser",
                 BaseUrl: "setting/baseUrl"
                })
            }
        });
    }
}
Vue.use(mixin);