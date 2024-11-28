<template>
  <div class="slidearea ps-0" style="height: 100vh;">
    <div class="silder-one" style="height: 100vh;">
      <Swiper
        class="swiper-container main-silder-swiper-03"
        :speed="1500"
        :parallax="true"
        :modules="module"
        :pagination="pagination"
        :loop="true"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
      >
        <SwiperSlide class="swiper-slide">
          <div class="silder-img overlay-black-light" style="height: 100vh;">
            <img src="@/assets/images/home-first.jpg" data-swiper-parallax="30%" alt="" style="filter: brightness(80%);"/>
          </div>
          <div class="silder-content" data-swiper-parallax="-40%">
            <div class="inner-content">
              <h6 class="sub-title">Chi siamo</h6>
              <h1 class="title">We Create</h1>
              <h3 class="title-small">Unique Architecture<br />Design Ideas</h3>
            </div>
            <!-- <div class="overlay-slide" data-swiper-parallax="100%"></div> -->
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Pagination, Navigation } from 'swiper/modules'

export default defineComponent({
  name: 'mainBanner',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      module: [Parallax, Pagination, Navigation]
    }
  }
})
</script>
