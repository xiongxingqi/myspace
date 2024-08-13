<template >
    <div class="card edit-fixed">
        <div class="card-body">
                <div class="mb-3">
                <label for="edit-post" class="form-label">编辑</label>
                <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
                <button @click="post_a_post" type="button" class="btn btn-primary">发帖</button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';
export default {
    name: "UserProfileWrite",
    setup(props,context) {
        const content=ref("");
        const store=useStore();
        const post_a_post= ()=>{
            console.log(props);
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "post",
                headers: {
                    'Authorization': 'Bearer ' + store.state.user.access,
                },
                data: {
                    content: content.value,
                },
                success(resp){
                    if(resp.result==="success"){
                        context.emit("post_a_post");
                        content.value="";
                    }
                    
                }
            });
           
        }

        return {
            content,
            post_a_post,
        }
    },
}
</script>


<style scoped>

.edit-fixed{
    margin-top: 20px;
}

button {
    margin-top: 10px;
}

</style>