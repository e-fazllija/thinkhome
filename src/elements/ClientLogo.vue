<template>
  <div class="clients-wrapper">
    <div class="container">
      <Swiper
        class="swiper-container clients-swiper"
        :slides-per-view="4"
        :modules="[Autoplay]"
        :loop="true"
        :speed="1500"
        :autoplay="{ delay: 1500 }"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          // 991: { slidesPerView: 4 },
          // 775: { slidesPerView: 4 },
          575: { slidesPerView: 3 },
          240: { slidesPerView: 2 }
        }"
      >
        <SwiperSlide class="swiper-slide" v-for="({ logo }, ind) in clientLogoArr" :key="ind">
          <div class="clients-logo aos-item">
            <img style="opacity: 1 !important" class="logo-main" :src="logo" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import logoGray1 from '@/assets/images/logo/logo-gray1.jpeg'
import logoGray2 from '@/assets/images/logo/logo-gray2.jpeg'
import logoGray3 from '@/assets/images/logo/logo-gray3.jpeg'
import logoGray4 from '@/assets/images/logo/logo-gray4.jpeg'
import { Autoplay } from 'swiper/modules'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      clientLogoArr: [
        { logo: logoGray1 },
        { logo: logoGray2 },
        { logo: logoGray3 },
        { logo: logoGray4 },
      ],
      Autoplay
    }
  }
})
</script>
