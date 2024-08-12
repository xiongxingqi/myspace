import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FriendsListView from '../views/FriendsListView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserDynamicsView from '../views/UserDynamicsView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friendsList',
    name: 'friendsList',
    component: FriendsListView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userDynamics',
    name: 'userDynamics',
    component: UserDynamicsView
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
