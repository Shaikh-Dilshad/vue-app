<template>
  <div class="home">
    <h1>MediaUrl {{ MediaUrl }}</h1>
    <h1>BaseUrl {{ BaseUrl }}</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data(){
    return {
      cats:{}
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    async getData(){
      let response = await axios.get('https://catfact.ninja/fact');
      console.log('response' , response.data);
    }
  }
};
</script>
