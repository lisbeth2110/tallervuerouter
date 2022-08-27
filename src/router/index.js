import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '../views/InicioView.vue'

import DashBoardAdm from '../views/Adm/DashBoardAdm.vue'
import create from '../views/Adm/productos/create.vue'
import index from '../views/Adm/productos/index.vue'
import update from '../views/Adm/productos/update.vue'

import DashBoardUsuario from '../views/Usuario/DashBoardUsuario.vue'
import rol from '../views/Usuario/login/rol.vue'
import inicioSesion from '../views/Usuario/login/inicioSesion.vue'

import Mostrar from '../views/Mostrar.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/DashBoardAdm',
    name: 'DashBoardAdm',
    component: DashBoardAdm
  },
  {
    path: '/create',
    name: 'create',
    component: create
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/update',
    name: 'update',
    component: update
  },
  {
    path: '/DashBoardUsuario',
    name: 'DashBoardUsuario',
    component: DashBoardUsuario
  },
  {
    path: '/rol',
    name: 'rol',
    component: rol
  },
  {
    path: '/inicioSesion',
    name: 'InicinicioSesionio',
    component: inicioSesion
  },
  {
    path: '/Mostrar',
    name: 'Mostrar',
    component: Mostrar
  },
  { 
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
