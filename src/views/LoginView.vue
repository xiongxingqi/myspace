<template >
    <base-content>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="login"> 
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                    </div>
                    <div class="error_massage">{{error_massage}}</div>
                    <button type="submit" class="btn btn-primary">登录</button>
                </form>
            </div>
        </div>
        
    </base-content>
</template>
<script>
import BaseContent from '@/components/BaseContent.vue'
import { ref } from 'vue';
import {useStore} from "vuex"
import router from "@/router/index"
export default {
    name: "LoginView",
    components : {
        BaseContent
    },
    setup(){
        const username=ref("");
        const password=ref("");
        const error_massage=ref("");
        const store=useStore();
        const login=() =>{
            error_massage.value="";
            store.dispatch("login",{  //使用store的dispatch方法调用action
                username: username.value,
                password: password.value,
                success(){
                    console.log("success");
                    router.push({name: 'friendsList'}); //使用router的push方法跳转到friendsList页面
                },
                error(){
                    console.log("failed");
                    error_massage.value="用户名或密码错误";
                }
            })
        }
        
        return {
            username,
            password,
            error_massage,
            login,
        }
    }
}
</script>
<style scoped>
.error_massage {
    color: red;
}

button{
    width: 100%;
}
</style>