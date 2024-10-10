<template>
  <div class="row">
    <div class="col-lg-12 m-b30">
      <Swiper
        class="swiper-container team-swiper-2"
        :slides-per-view="4"
        :space-between="30"
        :loop="true"
        :speed="1500"
        :modules="module"
        :autoplay="{ delay: 1500 }"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 }
        }"
      >
        <SwiperSlide class="swiper-slide" v-for="({ img, name, position }, ind) in team" :key="ind">
          <div class="dz-team style-3 text-center m-b30 overlay-shine aos-item">
            <div class="dz-media">
              <RouterLink to="?"><img :src="img" alt="" /></RouterLink>
              <ul class="team-social">
                <li>
                  <RouterLink to="?"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="?"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="?"><i class="fab fa-twitter"></i></RouterLink>
                </li>
              </ul>
            </div>
            <div class="dz-content m-t20">
              <h6 class="dz-position line text-primary">{{ name }}</h6>
              <h5 class="dz-name">
                <RouterLink to="?">{{ position }}</RouterLink>
              </h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import team_pic1 from '@/assets/images/team/pic1.jpg'
import team_pic2 from '@/assets/images/team/pic2.jpg'
import team_pic3 from '@/assets/images/team/pic3.jpg'
import team_pic4 from '@/assets/images/team/pic4.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

export default defineComponent({
  setup() {
    return {
      team: [
        { img: team_pic1, name: 'Engineer', position: 'Andrey Carol' },
        { img: team_pic2, name: 'Manager Effiect', position: 'Phillip Schleifer' },
        { img: team_pic3, name: 'CEO Factory', position: 'Lindsey Botosh' },
        { img: team_pic4, name: 'Sinior architect', position: 'Kaylynn Donin' },
        { img: team_pic2, name: 'Manager Effiect', position: 'Phillip Schleifer' }
      ],
      module: [Autoplay]
    }
  },
  components: { Swiper, SwiperSlide }
})
</script>

<style scoped></style>
