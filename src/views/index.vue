<template>
  <v-card>
    <v-card-title>
      <v-btn to="tasks/create">Create Task</v-btn>
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th class="text-left">Status</th>
            <th class="text-left">priority</th>
            <th class="text-left">due_date</th>
            <th class="text-left">assigned_to</th>
            <th class="text-left">created_by</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
       
        <tbody v-if="forms.length > 0">
          <tr v-for="(item , i) in forms" :key="i">
            <td>{{ item.title  || ""}}</td>
            <td>{{ item.description || "" }}</td>
            <td>{{ item.status || "" }}</td>
            <td>{{ item.priority || "" }}</td>
            <td>{{ item.due_date || "" }}</td>
            <td>{{ item.assigned_to ? item.assigned_to.name : "" }}</td>
            <td>{{ item.created_by ? item.created_by.name : ""  }}</td>
            <td><v-btn :to="`tasks/${item.id}`">Edit</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      forms: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let response = await axios.get(`tasks`);
        this.forms = response.data.data;
        console.log('respone' , this.form);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
