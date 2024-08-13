<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{name : 'home'}">Myspace</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">首页</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'friendsList'}">好友列表</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'userDynamics',params: {userId: 1} }">用户动态</router-link> <!--路由传路径参数 -->
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0" v-if="!$store.state.user.is_login">  <!-- 如果未登录则显示登录注册按钮 -->
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" :to="{name: 'login'}">登录</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" :to="{name : 'register'}">注册</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0" v-else> <!-- 如果已登录则显示用户名退出按钮 -->
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page"
                     :to="{name: 'userDynamics',params: {userId: $store.state.user.id } }">{{$store.state.user.username}}</router-link>
                    </li> 
                    <li class="nav-item">
                    <a class="nav-link" style="cursor: pointer" @click="logout"> 退出</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: "NavBar",
    setup(){

        const store=useStore(); 
        const logout= () =>{
            console.log("logout");
            store.commit('logout');
        }

        return {
            logout,
        }
    }
}
</script>

<style scoped >
    
</style>