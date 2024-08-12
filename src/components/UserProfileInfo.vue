<template >
    <base-content>
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/377958_lg_7782d96956.png" alt="头像">
            </div>
            <div class="col-9">
                <div class="userName">Xiong xingqi</div>
                <div class="fans"> 粉丝: 123</div>
            <button type="button" class="btn btn-secondary">+关注</button>
            </div>
        </div>
    </base-content>
    
</template>
<script>
import BaseContent from './BaseContent.vue'


export default {
    name: "UserProfileInfo",
    components: {
        BaseContent,
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