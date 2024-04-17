import { createRouter, createWebHistory } from 'vue-router'
import HomeChaosView from '../views/HomeChaosView.vue'
import getPortfolio from '@/modules/getPortfolio'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homechaos',
      component: () => import('../views/HomeChaosView.vue'),
      meta: {
        title: "Projects"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About"
      }
    },
    {
      path: '/homeorder',
      name: 'homeorder',
      component: () => import('../views/HomeOrderView.vue'),
      meta: {
        title: "Project"
      }
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImpressumView.vue'),
      meta: {
        title: "Projects"
      }
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      component: () => import('../views/PortfolioDetailView.vue'),
      meta: {
        dynamicTitle: true 
      }
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  document.title = `KW Portfolio | ${to.meta.title}`
  next()
}) */

router.beforeEach((to, from, next) => {
  if (to.meta.dynamicTitle) {
    const portfolioItem = getPortfolio()
      .portfolioItems.value
      .find(item => item.id == to.params.id)
      if(portfolioItem) {
        document.title = `Michelle Raschke | ${portfolioItem.title}`
      }
    }
    else {
      document.title = `Michelle Raschke | ${to.meta.title}`
    }
    next()
})

export default router