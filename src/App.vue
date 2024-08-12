<template>
    <NavBar/>
    <div class="container">
      <router-view/>
    </div>
  
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from "./components/NavBar.vue";


export default {
  name: "App",
  components: {
    NavBar,
  }
}
</script>


<style scoped>


</style>
