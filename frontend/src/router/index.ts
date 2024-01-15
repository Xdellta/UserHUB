import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ForgotPassView from '../views/ForgotPassView.vue';
import UpdatePassView from '../views/UpdatePassView.vue';
import UserView from '../views/UserView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/forgot-password',
      name: 'forgotPass',
      component: ForgotPassView,
    },
    {
      path: '/update-password',
      name: 'updatePass',
      component: UpdatePassView,
    },
    {
      path: '/',
      name: 'dashboard',
      component: UserView,
    },
  ],
});

export default router;