import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // background: "#FFFFFF",
        // background: "black",
        primary: "#FFC700",
        // background: colors.blue.lighten5
      },
      options: {
        customProperties: true,
      },
    },
  },
});
