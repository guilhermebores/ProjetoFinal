import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import RegisterView from '@/views/RegisterView.vue'
import GamesView from '@/views/GamesView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categoria',
      name: 'categoria',
      component: CategoriasView,
    },
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
      path: '/games/:id',
      name: 'GamesView',
      component: GamesView,
      props: true,
    },
    {
      path: '/', component: GamesView
    },
    {
      path: '/carrinho', component: CarrinhoView
    },
  ],
});

export default router;
