<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer3 from './components/Footer.vue'
import ScrollTop from './elements/ScrollTop.vue'
import Cursor from './elements/Cursor.vue'
</script>

<template>
  <div class="page-wraper">
    <Cursor />
    <component :is="$route.meta.layout3">
      <ScrollTop />
      <Header />
      <RouterView />
      <Footer3 />
    </component>
    <component :is="$route.meta.layout4">
      <RouterView />
    </component>
  </div>
</template>
