<template >
    <base-content>
        <div class="row">
            <div class="col-3"> <UserProfileInfo :user="user" @follow="follow" @nofollow="nofollow" /></div>
            <div class="col-9"><user-profile-posts/></div>
        </div>
    </base-content>
</template>
<script>
import BaseContent from '@/components/BaseContent.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePosts from '../components/UserProfilePosts.vue'
import { reactive } from 'vue';

export default {
    name: "UserDynamicsView",
    components: {
        BaseContent,
        UserProfileInfo,
        UserProfilePosts,
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

        const follow=()=>{
            user.is_followed=true;
        }

        const nofollow=()=>{
            user.is_followed=false;
        }
        
        return {
            user,
            follow,
            nofollow,
        }
    }
}
</script>
<style lang="css" scoped>
    
</style>