<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Academy" text="Academy" />
    <section class="section-full content-inner about-bx2">
      <HomeAbout />
    </section>
    <HomeFaq />
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import { defineComponent } from 'vue'
import bnr3 from '@/assets/images/banner/bnr45.jpg'
import HomeAbout from '@/components/HomeAcademy.vue'
import OurPortfolio from '@/components/OurPortfolio.vue'
import bg1 from '@/assets/images/background/bg1.png'
import backgrouBg2 from '@/assets/images/background/bg2.png'
import HomeFaq from '@/components/HomeFaq.vue'

export default defineComponent({
  name: 'about_us',
  setup() {
    return {
      bnr3,
      bg1,
      backgrouBg2,
      workProcessArr: [
        { num: '01', title: 'Receive Project' },
        { num: '02', title: 'Planning Work' },
        { num: '03', title: 'Creative Design' },
        { num: '04', title: 'Start Building' }
      ]
    }
  },
  components: { CommonBanner, HomeAbout, OurPortfolio, HomeFaq }
})
</script>

<style scoped></style>
