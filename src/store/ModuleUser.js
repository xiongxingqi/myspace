import $ from "jquery"
import { jwtDecode } from 'jwt-decode'
const ModuleUser = {
    state: {
        username: "",
        id: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.follower_count;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        updateAccess(state, access) {
            state.access = access;
        },
        logout(state) {
            state.username = "";
            state.id = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        }
    },
    actions: {
        //调用登录接口
        login(context, data) {
            // console.log(data);
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "post",
                data: {
                    username: data.username,
                    password: data.password
                },
                success(resp) {
                    //获得token
                    let { access, refresh } = resp;
                    let access_obj = jwtDecode(access);//解析token,获得user_id
                    // console.log(access_obj.user_id, refresh);
                    setInterval(() => { //设置定时器每五分钟刷新一次token
                        $.ajax({
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            type: "post",
                            data: {
                                refresh: refresh,
                            },
                            success(resp) {
                                context.commit("updateAccess", resp.access);
                                console.log(resp);
                            }
                        });
                    }, 4.5 * 60 * 1000);
                    //获取用户信息
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "get",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        headers: {
                            Authorization: "Bearer " + access,//固定写法别忘记加空格!
                        },
                        success(resp) {
                            context.commit("updateUser", { //在action中无法直接修改state,需要通过context的commit方法调用mutation进行修改
                                ...resp,
                                access: access,
                                refresh: refresh,
                                is_login: true,
                            });
                            data.success();
                        },
                    });
                },
                error() {
                    data.error();
                }
            });
        },
    },
    modules: {
    }
};
//模块化维护全局状态
export default ModuleUser;