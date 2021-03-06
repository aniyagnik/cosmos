import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SolarSystem from '../views/SolarSystem.vue'
import Galaxies from '../views/Galaxies.vue'
import CosmicBodies from '../views/CosmicBodies.vue'
import News from '../views/News.vue'
import CelestialObjects from '../views/CelestialObjects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/solarSystem',
    name: 'Our Solar System',
    component: SolarSystem
  },
  {
    path: '/galaxies',
    name: 'Galaxies',
    component: Galaxies
  },
  {
    path: '/cosmicBodies',
    name: 'CosmicBodies',
    component: CosmicBodies
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/solarSystem/:name',
    name: 'CelestialObjects',
    component: CelestialObjects
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
