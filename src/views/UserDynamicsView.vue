<template >
    <base-content>
        <div class="row">
            <div class="col-3">
                 <UserProfileInfo :user="user" @follow="follow" @nofollow="nofollow" />
                 <user-profile-write @post_a_post="post_a_post" v-if="is_me"/>
            </div>
            <div class="col-9">
                <user-profile-posts @delete_post="delete_post" :user="user" :list="list" />
            </div>
        </div>
    </base-content>
</template>
<script>
import BaseContent from '@/components/BaseContent.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePosts from '../components/UserProfilePosts.vue';
import { computed, reactive } from 'vue';
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
        const userId=parseInt(route.params.userId); //转换数据类型方便比较
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
                // console.log(resp);
                list.count=resp.length;
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

        const post_a_post=()=>{
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
            // console.log(resp);
            list.count=resp.length;
            list.posts=resp;
        }
        });
        }
        
        const delete_post= post_id =>{
            list.count--;
            list.posts=list.posts.filter(post=>post.id!=post_id);
        }
        
        const is_me= computed(() => userId === store.state.user.id);
        return {
            user,
            follow,
            nofollow,
            list,
            post_a_post,
            is_me,
            delete_post,
        }
    }
}
</script>
<style lang="css" scoped>
    
</style>