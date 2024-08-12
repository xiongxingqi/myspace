<template >
    <base-content>
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/377958_lg_7782d96956.png" alt="头像">
            </div>
            <div class="col-9">
                <div class="userName">{{fullName}}</div>
                <div class="fans"> 粉丝: {{user.followerCount}}</div>
            <button v-if="!user.is_followed"  @click="follow" type="button" class="btn btn-secondary">+关注</button>
            <button v-if="user.is_followed"  @click="nofollow" type="button" class="btn btn-secondary">已关注</button>
            </div>
        </div>
    </base-content>
    
</template>
<script>
import BaseContent from './BaseContent.vue'
import { computed } from 'vue';

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
        let fullName= computed(()=> props.user.firstName+' '+ props.user.lastName);

        const follow=()=>{
            context.emit('follow');
        }

        const nofollow=()=>{
            context.emit('nofollow');
        }

        return {
            fullName,
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


</style>