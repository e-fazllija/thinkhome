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
      path: '/all-agencies',
      name: 'all-agencies',
      component: () => import('../views/AllAgencies.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/work-with-us',
      name: 'work-with-us',
      component: () => import('../views/WorkWithUs.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/academy',
      name: 'academy',
      component: () => import('../views/Academy.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/send-request',
      name: 'send-request',
      component: () => import('../views/SendRequest.vue'),
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
      path: '/dettaglio/:id',
      name: 'dettaglio',
      component: () => import('../views/realEstateProperties/Details.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/contact-us',
      name: 'contact_us',
      component: () => import('../views/ContactUs.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/immobili-in-vendita/:tipologia/:localita/:da/:codice/:a?',
      name: 'immobili_in_vendita',
      component: () => import('../views/realEstateProperties/SaleList.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/immobili-in-affitto/:tipologia/:localita/:codice/:da/:a?',
      name: 'immobili_in_affitto',
      component: () => import('../views/realEstateProperties/RentList.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/aste-immobiliari/:tipologia/:localita/:codice/:da/:a?',
      name: 'aste_immobiliari',
      component: () => import('../views/realEstateProperties/AuctionsList.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/dettaglio/:id',
      name: 'dettaglio',
      component: () => import('../views/realEstateProperties/Details.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/richiesta-valutazione-immobile',
      name: 'richiesta_valutazione_immobile',
      component: () => import('../views/SendEvaluationRequest.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/vendita',
      name: 'vendita',
      component: () => import('../views/services/details/Vendita.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/affitto',
      name: 'affitto',
      component: () => import('../views/services/details/Affitto.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/valutazione-immobile',
      name: 'valutazione_immobile',
      component: () => import('../views/services/details/ValutazioneImmobile.vue'),
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
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/Privacy.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/general-conditions',
      name: 'general-conditions',
      component: () => import('../views/GeneralConditions.vue'),
      meta: { layout3: 'layout3' }
    }
  ]
})

export default router
