<template>
  <header
    :class="`site-header mo-left header style-2 header-transparent ${
      headerPosition ? 'is-fixed' : ''
    }`"
  >
    <div class="sticky-header main-bar-wraper navbar-expand-lg">
      <div class="main-bar clearfix">
        <div class="container clearfix">
          <div class="logo-header mostion logo-light" style="width: 20%;">
            <RouterLink to="/"
              ><img class="header_logo2"  src="@/assets/images/TH-6.jpg" alt=""
            /></RouterLink>
          </div>
          <button
            :class="`navbar-toggler collapsed navicon justify-content-end ${
              openMenu ? 'open' : ''
            }`"
            type="button"
            @click="openMenuHeader"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <!-- Extra Nav -->
          <div class="extra-nav">
            <div class="extra-cell">
              <!-- Quik Search -->
              <!-- <RouterLink class="search-link" id="quik-search-btn" to="?">
                <i class="flaticon-loupe"></i>
              </RouterLink> -->
              <div class="menu-btn navicon" @click="sidebarShow = true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="header-nav navbar-collapse justify-content-end">
            <div class="logo-header">
              <RouterLink to="/" class="logo-dark"
                ><img src="@/assets/images/TH-4.jpg" alt=""
              /></RouterLink>
            </div>
            <ul class="nav navbar-nav navbar navbar-left">
    <template v-for="({ menu, subMenu, className, to }, ind) in menuArr" :key="ind">
      <li
        :class="`sub-menu-down ${activemenu == menu ? 'active' : ''}`"
        v-if="className !== 'menu'"
        ref="subMenuRef"
        @click="
          () => {
            openSubMenu(ind-1)
          }
        "
        :key="ind"
      >
        <RouterLink to="?">{{ menu }}</RouterLink>
        <ul class="sub-menu">
          <li v-for="({ child, to }, index) in subMenu" :key="index">
            <RouterLink :to="`${to}`" @click="openMenuHeader">{{ child }}</RouterLink>
          </li>
        </ul>
      </li>
      <li v-else><RouterLink :to="`${to}`" @click="openMenuHeader">{{ menu }}</RouterLink></li>
    </template>
  </ul>            <!-- <div class="dz-social-icon">
              <ul>
                <li>
                  <a href="https://www.facebook.com/dexignzone/" target="_blank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dexignzone/" target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://twitter.com/dexignzones/" target="_blank"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@dexignzone1723" target="_blank"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <HeaderSidebar :show="sidebarShow" />
  <div class="menu-close" @click="sidebarShow = false"></div>
</template>

<script lang="ts">
import { defineComponent,reactive, ref } from 'vue'
import Menu from '@/components/Menu.vue'
import { RouterLink } from 'vue-router'
import HeaderSidebar from './HeaderSidebar.vue'
import router from '@/router'

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
  name: 'header_2',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Menu, RouterLink, HeaderSidebar },
  setup() {
    const headerPosition = ref<boolean>(false)
    const sidebarShow = ref<boolean>(false)
    const openMenu = ref<boolean>(false)
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
      { menu: 'Immobili', subMenu: [
      { child: 'Immobili in vendita', to: `/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1` },
      { child: 'Immobili in affitto', to: '/immobili-in-affitto/Qualsiasi/Qualsiasi/0/0/-1' },
      { child: 'Valutazione immobile', to: '/richiesta-valutazione-immobile' },
         ] },
      { menu: 'I nostri servizi', subMenu: [
      { child: 'Immobili in vendita', to: '/vendita' },
      { child: 'Immobili in affitto', to: '/affitto' },
      { child: 'Valutazione immobile', to: '/valutazione-immobile' },
      { child: 'Pratiche Urbanistiche', to: '/pratiche-urbanistiche' },
      { child: 'Pratiche Catastali', to: '/pratiche-catastali' },
      { child: 'Perizie, Stime e Tribunale', to: '/perizie-stime-tribunale' },
      { child: 'Investimenti Immobiliari', to: '/investimenti-immobiliari' },
      { child: 'Edilizia', to: '/edilizia' },
      { child: 'Servizi Vari', to: '/servizi-vari' }
         ] },
      { menu: 'Invia una richiesta', className: 'menu', to: '/send-request' },
      { menu: 'Chi siamo', className: 'menu', to: '/about-us' },
      { menu: 'Lavora con noi', className: 'menu', to: '/work-with-us' },
      { menu: 'Academy', className: 'menu', to: '/academy' },
    ])
    return { headerPosition, openMenu, sidebarShow, menuArr, activemenu }
  },
  created: function () {
    window.addEventListener('scroll', this.HeaderPosition)
  },
  unmounted: function () {
    window.removeEventListener('scroll', this.HeaderPosition)
  },
  methods: {
    HeaderPosition() {
      const value = window.scrollY

      if (value >= 100) {
        this.headerPosition = true
      } else {
        this.headerPosition = false
      }
    },
    openMenuHeader() {
      this.openMenu = !this.openMenu
      let nav = document.querySelector('.header-nav')?.classList
      this.openMenu ? nav?.add('show') : nav?.remove('show')
      this.sidebarShow=false
    },
    openSubMenu(ind: number) {
      const subMenuRefs = this.$refs.subMenuRef as HTMLLIElement[]
      subMenuRefs.forEach((el: HTMLLIElement, index: number) => {
        el.classList.toggle('open')

        if (ind !== index) {
          el.classList.remove('open')
        }
      })
    },
  }
})
</script>

<style scoped></style>
