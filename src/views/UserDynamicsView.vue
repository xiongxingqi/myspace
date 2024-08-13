<template >
    <base-content>
        <div class="row">
            <div class="col-3">
                 <UserProfileInfo :user="user" @follow="follow" @nofollow="nofollow" />
                 <user-profile-write @post_a_post="post_a_post" />
            </div>
            <div class="col-9">
                <user-profile-posts :list="list" />
            </div>
        </div>
    </base-content>
</template>
<script>
import BaseContent from '@/components/BaseContent.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePosts from '../components/UserProfilePosts.vue';
import { reactive } from 'vue';
import UserProfileWrite from '../components/UserProfileWrite.vue';
import { useRoute } from 'vue-router'; //使用useRoute()函数获取route进而获得路径参数
import $ from 'jquery';
import { useStore } from 'vuex';
export default {
    name: "UserDynamicsView",
    components: {
        BaseContent,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },
    setup() {
        const route=useRoute();
        const userId=route.params.userId;
        // console.log(userId);
        const user=reactive({});
        const list=reactive({});
        const store =useStore();
        
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "get",
            headers:{
                'Authorization': 'Bearer ' + store.state.user.access,
            },
            data: {
                user_id: userId
            },
            success(resp){
                // console.log(resp);
                user.username=resp.username;
                user.id=resp.id;
                user.followerCount=resp.followerCount;
                user.photo=resp.photo;
                user.is_followed=resp.is_followed;
            }
        });

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "get",
            headers: {
                'Authorization' : 'Bearer ' +store.state.user.access,
            },
            data: {
                user_id: userId,
            },
            success(resp){
                console.log(resp);
                list.posts=resp;
            }
        });

        const follow=()=>{
            if(user.is_followed) return ;
            user.is_followed=true;
            user.followerCount++;
        }

        const nofollow=()=>{
            if(!user.is_followed) return;
            user.is_followed=false;
            user.followerCount--;
        }

        const post_a_post=(content)=>{
            list.count++;
            list.posts.unshift({
                id: list.count,
                userId: user.id,
                content: content,
            });
        }
        
        return {
            user,
            follow,
            nofollow,
            list,
            post_a_post,

        }
    }
}
</script>
<style lang="css" scoped>
    
</style>