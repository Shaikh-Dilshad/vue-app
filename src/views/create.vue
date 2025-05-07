<template>
  <v-main>
    <v-container fluid data-app>
      <v-card elevation="3" rounded="xxl">
        <v-card-title>
          <v-btn class="mx-2" color="primary" @click="$router.back()">
            <span style="color: black"> Back </span>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col sm="12">
              <v-col cols="6" style="padding: 0px">
                <v-text-field
                  v-model="form.title"
                  outlined
                  label="Enter A Title *"
                  prepend-inner-icon="mdi-buffet"
                ></v-text-field>
              </v-col>
            </v-col>
            <v-col sm="12">
              <v-col cols="6" style="padding: 0px">
                <v-textarea
                  v-model="form.description"
                  outlined
                  label="Description"
                  prepend-inner-icon="mdi-buffet"
                ></v-textarea>
              </v-col>
            </v-col>
            <v-col sm="4">
              <v-autocomplete
                ref="Status"
                v-model="form.status"
                :items="items"
                outlined
                dense
                chips
                clearable
                label="Status"
              ></v-autocomplete>
            </v-col>
            <v-col sm="4">
              <v-autocomplete
                v-model="form.priority"
                :items="items2"
                outlined
                dense
                chips
                small-chips
                label="priority"
              ></v-autocomplete>
            </v-col>
            <v-col sm="4">
              <v-autocomplete
                v-model="form.assigned_to"
                :items="assignUsers"
                outlined
                dense
                chips
                small-chips
                label="Assign User"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-divider class="mt-5 mb-5"> </v-divider>
          <v-btn
            :loading="isLoading"
            :disabled="isLoading"
            rounded
            color="primary"
            dark
            @click="save"
          >
            Save User
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios";
export default {
  name: "CreatePage",
  data() {
    return {
      form: {
        status: "",
      },
      isLoading: false,
      assignUsers: [],
      items: [
        { id: 0, text: "PENDING", value: "PENDING" },
        { id: 1, text: "IN_PROGRESS", value: "IN_PROGRESS" },
        { id: 2, text: "COMPLETED", value: "COMPLETED" },
      ],
      items2: [
        { text: "LOW", value: "LOW" },
        { text: "MEDIUM", value: "MEDIUM" },
        { text: "HIGH", value: "HIGH" },
      ],
    };
  },
  mounted() {
    this.getMasters();
  },
  methods: {
    async getMasters() {
      let masters = null;
      try {
        masters = await axios.get(`tasks/masters`);
        masters = masters.data;
        //Position
        masters.users.forEach((userDetail) => {
          this.assignUsers.push({
            id: userDetail.id,
            text: userDetail.name,
            value: userDetail.id,
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async save() {
      try {
        this.isLoading = true;
        this.form.created_by = this.user.id;
        console.log()
        await axios.post("/tasks", this.form);
        this.isLoading = false;
        this.$router.back();
      } catch (e) {
        // alert("error");
        this.isLoading = false;
      }
    },
  },
};
</script>
