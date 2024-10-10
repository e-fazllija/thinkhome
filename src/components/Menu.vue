<template>
  <ul class="nav navbar-nav navbar navbar-left">
    <template v-for="({ menu, subMenu, className, to }, ind) in menuArr" :key="ind">
      <li
        :class="`sub-menu-down ${activemenu == menu ? 'active' : ''}`"
        v-if="className !== 'menu'"
        ref="subMenuRef"
        @click="
          () => {
            openSubMenu(ind)
          }
        "
        :key="ind"
      >
        <RouterLink to="?">{{ menu }}</RouterLink>
        <ul class="sub-menu">
          <li v-for="({ child, to }, index) in subMenu" :key="index">
            <RouterLink :to="`${to}`">{{ child }}</RouterLink>
          </li>
        </ul>
      </li>
      <li v-else><RouterLink :to="`${to}`">{{ menu }}</RouterLink></li>
    </template>
  </ul>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

interface SubMenu {
  child: string
  to: string
}
interface MenuItem {
  menu: string
  subMenu?: SubMenu[]
  className?: string
  to?: string
}
export default defineComponent({
  name: 'menuItem',
  setup() {
    const activemenu = ref<string>('')
    router.afterEach((to) => {
      menuArr.map((el) => {
        if (to.fullPath == el.to) {
          activemenu.value = el.menu
        }
        el.subMenu?.map((ell) => {
          if (to.fullPath == ell.to) {
            activemenu.value = el.menu
          }
        })
      })
    })
    const menuArr = reactive<MenuItem[]>([
      { menu: 'Home', className: 'menu', to: '/' },
      
      // {
      //   menu: 'Pages',
      //   subMenu: [
      //     { child: 'About Us', to: '/about-us' },
      //     { child: 'Team', to: '/team' },
      //     { child: 'Coming Soon', to: '/coming-soon' },
      //     { child: 'Under Construct', to: '/under-construct' },
      //     { child: 'Error 404', to: '/error-404' }
      //   ]
      // },
      // {
      //   menu: 'Portfolio',
      //   subMenu: [
      //     { child: 'Portfolio', to: '/portfolio' },
      //     { child: 'Portfolio Details', to: '/portfolio-details' }
      //   ]
      // },
      // {
      //   menu: 'Services',
      //   subMenu: [
      //     { child: 'Services', to: '/services' },
      //     { child: 'Services Details', to: '/services-details' }
      //   ]
      // },
      { menu: 'I nostri servizi', subMenu: [
          { child: 'Pratiche Urbanistiche', to: '/pratiche-urbanistiche' },
           { child: 'Pratiche Catastali', to: '/pratiche-catastali' },
           { child: 'Perizie, Stime e Tribunale', to: '/perizie-stime-tribunale' },
           { child: 'Investimenti Immobiliari', to: '/investimenti-immobiliari' },
           { child: 'Edilizia', to: '/Edilizia' },
           { child: 'Servizi Vari', to: '/servizi-vari' }
         ] },
      { menu: 'Chi siamo', className: 'menu', to: '/about-us' },
      // {
      //   menu: 'Blog',
      //   subMenu: [
      //     { child: 'Blog Grid', to: '/blog-grid' },
      //     { child: 'Large Left Sidebar', to: '/blog-large-left-sidebar' },
      //     { child: 'List Left Sidebar', to: '/blog-list-left-sidebar' },
      //     { child: 'Blog Details', to: '/blog-details' }
      //   ]
      // },
      // { menu: 'Contact Us', className: 'menu', to: '/contact-us' }
    ])
    return { menuArr, activemenu }
  },
  methods: {
    openSubMenu(ind: number) {
      const subMenuRefs = this.$refs.subMenuRef as HTMLLIElement[]
      subMenuRefs.forEach((el: HTMLLIElement, index: number) => {
        el.classList.toggle('open')

        if (ind !== index) {
          el.classList.remove('open')
        }
      })
    }
  },
  components: { RouterLink }
})
</script>

<style scoped></style>
