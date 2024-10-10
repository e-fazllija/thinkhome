<template>
  <div class="col-xl-9 col-lg-8">
    <Swiper
      class="swiper-container swiper-portfolio-2 lightgallery"
      :slides-per-view="3"
      :loop="true"
      :speed="1500"
      :breakpoints="{
        1200: { slidesPerView: 3 },
        575: { slidesPerView: 2 },
        240: { slidesPerView: 1 }
      }"
      :pagination="pagination"
      :modules="modules"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="({ img, subtitle, title, text }, ind) in ourPortfolio"
        :key="ind"
      >
        <div class="dz-box overlay style-2">
          <div class="dz-media">
            <img :src="img" alt="" />
          </div>
          <div class="dz-info">
            <h6 class="sub-title">{{ subtitle }}</h6>
            <h4 class="title m-b15">
              <RouterLink to="/portfolio-details"
                >{{ title }}<span>{{ text }}</span></RouterLink
              >
            </h4>
          </div>
        </div>
      </SwiperSlide>
      <div>
        <div class="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import workPic1 from '@/assets/images/work/work-1/pic-1.jpg'
import workPic2 from '@/assets/images/work/work-1/pic-2.jpg'
import workPic3 from '@/assets/images/work/work-1/pic-3.jpg'
import workPic4 from '@/assets/images/work/work-1/pic-4.jpg'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      ourPortfolio: [
        {
          img: workPic1,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern House Interior',
          text: 'New York'
        },
        { img: workPic2, subtitle: 'ARCHITECTURAL', title: 'Residential Project,', text: 'Paris' },
        {
          img: workPic3,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern Family House, ',
          text: 'Italy'
        },
        { img: workPic4, subtitle: 'ARCHITECTURAL', title: 'Residential Project, ', text: 'Paris' }
      ],
      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      modules: [Pagination]
    }
  }
})
</script>

<style scoped></style>
