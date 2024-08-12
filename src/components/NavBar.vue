<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">myspace</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">首页</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/friendsList">好友列表</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/userDynamics">用户动态</a>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/login">登录</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/register">注册</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped >
    
</style>