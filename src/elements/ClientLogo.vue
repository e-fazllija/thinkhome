<template>
  <div class="clients-wrapper">
    <div class="container">
      <!-- <Swiper
        class="swiper-container clients-swiper"
        :slides-per-view="4"
    
        :loop="true"
        :speed="1500"
        :autoplay="{ delay: 1500 }"
        :breakpoints="{
          991: { slidesPerView: 1 },
          775: { slidesPerView: 4 },
          575: { slidesPerView: 3 },
          240: { slidesPerView: 2 }
        }"
      > -->
  <div class="form-wrapper" style="width: 100%; max-width: 1000px; margin: 0 auto; padding: 30px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 10px;">
    <div class="container">
      <div class="row align-items-center about-bx3 mb-3">
        <div class="col-3 mb-3">
          <img :src="clientLogoArr[0].logo" alt="Logo 1" style="width: 40%; height: auto; object-fit: contain;" />
        </div>
        <div class="col-3 mb-3">
          <img :src="clientLogoArr[1].logo" alt="Logo 2" style="width: 40%; height: auto; object-fit: contain;" />
        </div>
        <div class="col-3 mb-3">
          <img :src="clientLogoArr[2].logo" alt="Logo 3" style="width: 40%; height: auto; object-fit: contain;" />
        </div>
        <div class="col-3 mb-3">
          <img :src="clientLogoArr[3].logo" alt="Logo 4" style="width: 40%; height: auto; object-fit: contain;" />
        </div>
      </div>
    </div>
  </div>


        <!-- <SwiperSlide class="swiper-slide" v-for="({ logo }, ind) in clientLogoArr" :key="ind">
          <div class="container-fluid">
            <img style="opacity: 1 !important" class="logo-main" :src="logo" alt="" />
          </div>
        </SwiperSlide> -->
      <!-- </Swiper> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import logoGray1 from '@/assets/images/logo/logo-gray1.jpeg'
import logoGray2 from '@/assets/images/logo/logo-gray2.jpeg'
import logoGray3 from '@/assets/images/logo/logo-gray3.jpeg'
import logoGray4 from '@/assets/images/logo/logo-gray4.jpeg'

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
    }
  }
})
</script>
