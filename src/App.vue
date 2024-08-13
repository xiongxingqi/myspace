<template>
    <NavBar/>
    <div class="container">
      <router-view :key="$route.fullPath" /> <!-- 添加key属性，防止路由切换时，组件不重新渲染,路径参数不参与匹配-->
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

.container{
  margin-top: 20px;
}

</style>
