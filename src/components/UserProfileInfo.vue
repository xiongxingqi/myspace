<template >
    <base-content>
        <div class="row">
            <div class="col-3 image-center">
                <img class="img-fluid " :src="user.photo" alt="头像">
            </div>
            <div class="col-9">
                <div class="userName">{{user.username}}</div>
                <div class="fans"> 粉丝: {{user.followerCount}}</div>
            <button v-if="!user.is_followed"  @click="follow" type="button" class="btn btn-secondary">+关注</button>
            <button v-if="user.is_followed"  @click="nofollow" type="button" class="btn btn-secondary">已关注</button>
            </div>
        </div>
    </base-content>
    
</template>
<script>
import { useStore } from 'vuex'
import BaseContent from './BaseContent.vue'
import $ from 'jquery'
export default {
    name: "UserProfileInfo",
    props: {
        user:{
            type: Object,
            required: true,
        }
    },
    components: {
        BaseContent,
    },
    setup(props,context){
        const store = useStore();
        const follow=()=>{
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "post",
                headers: {
                    'Authorization': 'Bearer ' + store.state.user.access,
                },
                data: {
                    target_id: props.user.id,
                },
                success(resp){
                    if(resp.result=="success"){
                         context.emit('follow');
                    }
                }
            });
           
        }

        const nofollow=()=>{
             $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "post",
                headers: {
                    'Authorization': 'Bearer ' + store.state.user.access,
                },
                data: {
                    target_id: props.user.id,
                },
                success(resp){
                    if(resp.result=="success"){
                            context.emit('nofollow');
                    }
                }
            });
           
        }

        return {
            follow,
            nofollow,
        };
    },
}   
</script>
<style  scoped>

img {
    border-radius: 50%;
}

.userName{
    font-weight: bold;
}

.fans{
    color: gray;
    font-size: 14px;
}

button {
    padding: 2px 4px;
}

.image-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>