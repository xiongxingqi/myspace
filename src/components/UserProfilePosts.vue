<template >
    <BaseContent>
        <div v-for="post in list.posts" :key="post.id">
            <div class="card single-post">
                <div class="card-body">
                    {{post.content}}
                </div>
            </div>

        </div>
    </BaseContent>
</template>
<script>
import BaseContent from './BaseContent.vue'

export default {
    name: 'UserProfilePosts',
    props: {
      list: {
        type: Object,
        required: true,
      }  
    },
    components: {
        BaseContent,
    },
}
</script>
<style scoped>

.single-post{

    margin-bottom: 10px;
}

</style>