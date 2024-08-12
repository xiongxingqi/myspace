<template >
    <BaseContent>
        <div class="card card-list" v-for="user in users" :key="user.id">
            <div class="card-body card-body-list">
                <div class="row">
                    <div class="col-1">
                        <img class="img-fluid" :src="user.photo" alt="头像">
                    </div>
                    <div class="col-11">
                        <div class="username">{{user.username}}</div>
                        <div class="followerCount"> {{user.followerCount}}</div>
                    </div>
                </div>
            </div>
        </div>
    </BaseContent>
</template>
<script>
import {  ref } from 'vue';
import BaseContent from '../components/BaseContent.vue';
import $ from 'jquery'
export default {
    name: "FriendsListView",
    components: {
        BaseContent
    },
    setup(){
        const users=ref([]);

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
            type: "get",
            success(resp){
                // console.log(resp);
                users.value=resp;
            }
        });

        return {
            users,
        }
    }
}
</script>
<style scoped >
img{
    border-radius: 50%;
}

.card-list {
    margin-bottom: 10px;
}

.card-list:hover {
    box-shadow: 2px 2px 10px lightblue;
    transition: 500ms;
}

.card-body-list{
    cursor: pointer;
}

.username{
    font-weight: bold;
    height: 50%;
}

.followerCount{
    font-size: 12px;
    height: 50%;
    color: gray;
}


</style>