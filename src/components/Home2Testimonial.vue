<template>
  <div class="testi-inner">
    <Swiper
      class="swiper-container testimonial-swiper-2"
      :speed="1500"
      :loop="true"
      :autoplay="{ delay: 1500 }"
      :modules="modules"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="({ img, name, position }, ind) in testimonials"
        :key="ind"
      >
        <div class="testimonial-2">
          <div class="testimonial-text">
            <!-- <p>
              Aliquam a arcu dolor. Sed malesuada convallis euismod. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Ut dui leo, posuere
              pulvinar metus vitae, condimentum tempus ipsum.
            </p> -->
          </div>
          <div class="testimonial-detail">
            <div class="testimonial-pic">
              <img :src="img" alt="" />
            </div>
            <div class="clearfix">
              <h4 class="testimonial-name">{{ name }}</h4>
              <span class="testimonial-position">{{ position }}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import testimonial_pic1 from '@/assets/images/testimonials/pic1.jpg'
import testimonial_pic2 from '@/assets/images/testimonials/pic2.jpg'
import testimonial_pic3 from '@/assets/images/testimonials/pic3.jpg'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      testimonials: [
        { img: testimonial_pic1, name: 'David Matin', position: 'Engineer' },
        { img: testimonial_pic2, name: 'Phillip Schleifer', position: 'Manager Effiect' },
        { img: testimonial_pic3, name: 'Lindsey Botosh', position: 'CEO Factory' }
      ],
      modules: [Autoplay]
    }
  }
})
</script>

<style scoped></style>
