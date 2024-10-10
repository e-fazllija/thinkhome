import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUs.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/coming-soon',
      name: 'coming_soon',
      component: () => import('../views/socialPages/ComingSoon.vue'),
      meta: { layout4: 'layout' }
    },
    {
      path: '/under-construct',
      name: 'under_construct',
      component: () => import('../views/socialPages/UnderConstruct.vue'),
      meta: { layout4: 'layout' }
    },
    {
      path: '/error-404',
      name: 'error_404',
      component: () => import('../views/Error404.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolio/PortfolioView.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/portfolio-details',
      name: 'portfolio_detail',
      component: () => import('../views/portfolio/PortfolioDetail.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/services/Services.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/services-details/:id',
      name: 'services_details',
      component: () => import('../views/services/ServicesDetails.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/blog-grid',
      name: 'blog_grid',
      component: () => import('../views/blogs/Blog.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/blog-large-left-sidebar',
      name: 'blog_large_left_sidebar',
      component: () => import('../views/blogs/BlogLargeLeftSidebar.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/blog-list-left-sidebar',
      name: 'blog_list_left_sidebar',
      component: () => import('../views/blogs/BlogListLeftSidebar.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/blog-details',
      name: 'blog_details',
      component: () => import('../views/blogs/BlogDetails.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/contact-us',
      name: 'contact_us',
      component: () => import('../views/ContactUs.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/pratiche-urbanistiche',
      name: 'pratiche_urbanistiche',
      component: () => import('../views/services/details/ServicesDetailsPraticheUrbanistiche.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/pratiche-catastali',
      name: 'pratiche_catastali',
      component: () => import('../views/services/details/ServicesDetailsPraticheCatastali.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/perizie-stime-tribunale',
      name: 'perizie_stime_tribunale',
      component: () => import('../views/services/details/ServicesDetailsPerizieStimeTribunale.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/investimenti-immobiliari',
      name: 'investimenti_immobiliari',
      component: () => import('../views/services/details/ServicesDetailsInvestimentiImmobiliari.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/edilizia',
      name: 'edilizia',
      component: () => import('../views/services/details/ServicesDetailsEdilizia.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/servizi-vari',
      name: 'servizi_vari',
      component: () => import('../views/services/details/ServicesDetailsServizi-Vari.vue'),
      meta: { layout3: 'layout3' }
    }

  ]
})

export default router
