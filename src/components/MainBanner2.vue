<template>
  <div class="slidearea ps-0">
    <div class="silder-two">
      <Swiper
        class="swiper-container main-silder-swiper-02"
        :loop="true"
        :speed="1500"
        :parallax="true"
        :modules="module"
        :autoplay="{ delay: 1500 }"
        :pagination="pagination"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
      >
        <SwiperSlide
          v-for="({ bg, img, img2 }, ind) in mainBannerArr"
          :key="ind"
          class="swiper-slide"
          :style="`background-image: url(${bg});
              background-position: bottom left;
              background-repeat: no-repeat;`"
        >
          <div class="silder-content" data-swiper-parallax="-40%">
            <div class="side-image" data-swiper-parallax="100%">
              <img :src="img" alt="" />
            </div>
            <div class="inner-content">
              <div class="inner-text">
                <h3 class="title-small">Creative Concepts<br />Interior Design</h3>
                <p>
                  Morbi pharetra fermentum facilisis. Aenean eleifend quam ante, at luctus turpis
                  rhoncus quis. Quisque in est luctus, blandit lorem quis, placerat augue.
                </p>
                <RouterLink to="/about-us" class="btn shadow-primary btn-primary btn-rounded"
                  >Contact Us</RouterLink
                >
              </div>
            </div>
            <div class="overlay-slide" data-swiper-parallax="100%">
              <img :src="img2" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-pagination swiper-pagination-white"></div>
        <div class="slider-one-pagination">
          <div class="btn-prev swiper-button-prev2 swiper-button-white">
            <i class="las la-angle-left"></i>
          </div>
          <div class="btn-next swiper-button-next2 swiper-button-white">
            <i class="las la-angle-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'
import bg1 from '@/assets/images/background/bg1.png'
import slide3 from '@/assets/images/main-slider/side3.jpg'
import slide4 from '@/assets/images/main-slider/side4.jpg'
import slide5 from '@/assets/images/main-slider/side5.jpg'
import slide_pic3 from '@/assets/images/main-slider/pic3.jpg'
import slide_pic4 from '@/assets/images/main-slider/pic4.jpg'
import slide_pic5 from '@/assets/images/main-slider/pic5.jpg'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      mainBannerArr: [
        { bg: bg1, img: slide3, img2: slide_pic3 },
        { bg: bg1, img: slide4, img2: slide_pic4 },
        { bg: bg1, img: slide5, img2: slide_pic5 }
      ],
      module: [Parallax, Autoplay, Pagination, Navigation],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }
})
</script>

<style scoped></style>
