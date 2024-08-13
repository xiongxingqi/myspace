<template >
    <BaseContent>
        <div v-for="post in list.posts" :key="post.id">
            <div class="card single-post">
                <div class="card-body">
                    {{post.content}}
                    <button v-if="is_me" @click="delete_post(post.id)" type="button" class="btn btn-danger">删除</button>
                </div>
            </div>

        </div>
    </BaseContent>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import BaseContent from './BaseContent.vue'
import $ from 'jquery'
export default {
    name: 'UserProfilePosts',
    props: {
      list: {
        type: Object,
        required: true,
      },
      user: {
        type: Object,
        required: true,
      }  
    },
    components: {
        BaseContent,
    },
    setup(props,context){
        const store=useStore();
        const is_me=computed(() => store.state.user.id === props.user.id);
        const delete_post=(post_id) =>{
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "delete",
                headers: {
                    'Authorization': 'Bearer ' + store.state.user.access,
                },
                data: {
                    post_id: post_id,
                },
                success(resp) {
                    if(resp.result==="success"){
                        context.emit("delete_post", post_id);
                    }else{
                        console.log("删除失败");
                    }
                }
                }
            );
        }
        return {
          is_me,  
          delete_post,
        };
    },
}
</script>
<style scoped>

.single-post{

    margin-bottom: 10px;
}

button{
    float: right;
}

</style>