<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Chi siamo" text="Chi siamo" />
    <section class="section-full content-inner about-bx2">
      <HomeAbout />
    </section>
    <!-- <section class="content-inner-2">
      <div class="container">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">WORK PROCESS</h6>
          <h2 class="title">How Our Work Process</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="({ num, title }, ind) in workProcessArr" :key="ind">
            <div class="work-process shadow text-center m-b30">
              <div class="number">{{ num }}</div>
              <h4 class="title m-b15">{{ title }}</h4>
              <p class="m-b0">Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum.</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="content-inner-2" :style="`background-image: url(${bg1});`">
      <div class="container">
        <div class="row section-head-bx align-items-center">
          <div class="col-md-8">
            <!-- <div class="section-head style-1">
              <h6 class="sub-title text-primary">OUR PORTFOLIOS</h6>
              <h2 class="title">Our Latest Projects</h2>
            </div> -->
          </div>
          <!-- <div class="col-md-4 text-start text-md-end mb-4 mb-md-0">
            <RouterLink to="/portfolio" class="btn-link"
              >See All Projects <i class="fas fa-plus scale08"></i
            ></RouterLink>
          </div> -->
        </div>
      </div>
      <!-- <OurPortfolio /> -->
    </section>
    <!-- <section
      class="content-inner-2"
      :style="` background-image: url(${backgrouBg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <Testimonial />
    </section> -->
    <!-- <section class="content-inner-2" :style="`background-image: url(${bg1});`">
      <div class="container-fluid">
        <Testimonial2 />
      </div>
    </section> -->
    <HomeFaq />
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import { defineComponent } from 'vue'
import bnr3 from '@/assets/images/banner/bnr9.jpg'
import HomeAbout from '@/components/HomeAbout.vue'
import OurPortfolio from '@/components/OurPortfolio.vue'
import bg1 from '@/assets/images/background/bg1.png'
import Testimonial from '@/components/Testimonial.vue'
import backgrouBg2 from '@/assets/images/background/bg2.png'
import Testimonial2 from '@/components/Testimonial2.vue'
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
  components: { CommonBanner, HomeAbout, OurPortfolio, Testimonial, Testimonial2, HomeFaq }
})
</script>

<style scoped></style>
