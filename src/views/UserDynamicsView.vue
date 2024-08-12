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
export default {
    name: "UserDynamicsView",
    components: {
        BaseContent,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },
    setup() {
        const user=reactive({
            id: 1,
            username: "xiongxingqi",
            firstName: "xiong",
            lastName: "xingqi",
            followerCount: 0,
            is_followed: false,
        });

        const list=reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userId: 1,
                    content: "他叫张朝南，乡村教师，朴实敦厚，典型的山里汉子。他有太多的事迹可以让那一方人永远记住他，", 
                },
                {
                    id: 2,
                    userId: 1,
                    content: "直到暴发那场最大的泥石流。那一次，张朝南在生死边缘走了无数次，救下了二十一名学生，"
                },
                {
                    id: 3,
                    userId: 1,
                    content: "此人叫凌厉。人如其名，他在那个圈子里绝对是人人谈之色变的人物。他是一个保镖，花高价雇他的人极其放心。他的身手，十个经过专业训练的大汉也不是对手，"
                }
                
            ]
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