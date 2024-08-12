<template >
    <base-content>
        <div class="row">
            <div class="col-3"> <UserProfileInfo/></div>
            <div class="col-9"><user-profile-posts/></div>
        </div>
    </base-content>
</template>
<script>
import BaseContent from '@/components/BaseContent.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePosts from '../components/UserProfilePosts.vue'

export default {
    name: "UserDynamicsView",
    components: {
        BaseContent,
        UserProfileInfo,
        UserProfilePosts,
    },
}
</script>
<style lang="css" scoped>
    
</style>