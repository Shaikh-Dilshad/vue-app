<template>
    <v-container fill-height>
      <v-row align="center" justify="center" dense>
        <v-col class="py-12">
          <v-card elevation="3" class="mx-auto" variant="outlined" color="grey lighten-3" rounded="xxl"
            :height="$vuetify.breakpoint.mdAndDown ? '40pc' : '600px'">
            <v-card-text>
              <v-row>
                <v-col align-self="center" md="6" sm="6" lg="6" class="py-auto">
                  <v-card color="px-12 grey lighten-4" rounded="xl"
                    :height="$vuetify.breakpoint.mdAndDown ? '22pc' : '565px'">
                    <v-card-text>
                      <v-text-field v-model="form.email" outlined solo rounded label="Email"
                        placeholder="Enter email address" clearable @click:clear="form.email = null"
                        prepend-inner-icon="mdi-email" ></v-text-field>
                      <v-text-field v-model="form.password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'" outlined solo rounded @keypress.enter="login"
                         label="Password" placeholder="Enter password"
                        prepend-inner-icon="mdi-lock" @click:append="showPassword = !showPassword"></v-text-field>
                      <v-btn   block rounded @click="login">
                        Login
                      </v-btn>
                      <v-btn text color="primary" align="right" to="/forgot-password">
                        Forgot password?
                      </v-btn>
                    </v-card-text>
                  </v-card>
                  <!-- <span>{{ errorMsg }}</span> -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import axios from "axios";
  
  export default {
    name: "LoginPage",
    data() {
      return {
        form: {
          email: "",
          password: "",
          portal: true,
        },
        loggedInRole: "",
        logo_path: "../../assets/sapp-logo.png",
        is_company_user: false,
        showPassword: false,
        isLoading: false,
      };
    },
    methods: {
      ...mapActions({
        logIn: "auth/logIn",
      }),
      async login() {
        this.isLoading = true;
        this.logIn(this.form)
          .then(() => {
            this.isLoading = false;
            location.reload("/");
          })
          .catch(() => {
            alert("User can't login in portal");
            this.isLoading = false;
          });
        this.isLoading = false;
      },
    },
  };
  </script>
  