<template>
  <div class="home-blog-section">
  <Swiper class="swiper-container blog-swiper" style="min-height: 350px;" :slides-per-view="3" :space-between="30"
    :loop="items && items.length > 3" :autoplay="{ delay: 1500 }" :speed="1500" :breakpoints="{
      991: { slidesPerView: 3 },
      691: { slidesPerView: 2 },
      240: { slidesPerView: 1 }
    }">
    <SwiperSlide class="swiper-slide" v-for="(item, ind) in items" :key="ind">
      <div class="dz-card blog-grid style-3 aos-item h-100 rounded-0 home-blog-card">
        <div class="dz-media home-blog-media">
          <Swiper class="swiper-container post-swiper" :speed="1500" :loop="item.Photos && item.Photos.length > 1" :modules="modules" :navigation="{
            prevEl: '.prev-post-swiper-btn',
            nextEl: '.next-post-swiper-btn'
          }">
          
            <SwiperSlide v-for="(photo, ind) in item.Photos" :key="ind" class="swiper-slide">
              <RouterLink v-if="item.Id && item.Id > 0" :to="{ name: 'dettaglio', params: { id: item.Id } }"><img :src="photo.Url" alt="" class="home-blog-image"/></RouterLink>
            </SwiperSlide>
            <div class="prev-post-swiper-btn"><i class="la fa-angle-left"></i></div>
            <div class="next-post-swiper-btn"><i class="la fa-angle-right"></i></div>
          </Swiper>
        </div>
        <div class="dz-info home-blog-info">
          <p class="home-blog-code">Cod. 00{{ item.Id }}</p>
          <h1 v-if="item.Price === -1" class="home-blog-price">Trattativa riservata</h1>

          <div v-else-if="item.PriceReduced && item.PriceReduced > 0">
            <h1 class="home-blog-price"> 
              € {{ item.PriceReduced.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+ ",00"}}
            </h1>
            <h4 class="home-blog-price-reduced">
              € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00
            </h4>
          </div>
          
          <h1 v-else class="home-blog-price">
            € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+ ",00"}}
          </h1>

          <h3 class="home-blog-town">{{ item.Town }}</h3>
          <h3 class="home-blog-address">
            <i class="fa fa-map-pin"></i> {{ item.AddressLine }}
          </h3>
          <div class="home-blog-details">
            <span class="home-blog-detail">{{ item.TypeOfProperty }}</span>
            <span class="home-blog-detail home-blog-detail-energy">
              <img src="@/assets/images/energy.png" /> {{ item.EnergyClass }}
            </span>
          </div>
          <p class="home-blog-description">
            {{ item.Description.substring(0, 300) }}...
          </p>
          </div>
          <div class="read-more home-blog-read-more">
            <RouterLink v-if="item.Id && item.Id > 0" :to="{ name: 'dettaglio', params: { id: item.Id } }"
              class="btn btn-primary btn-rounded btn-sm hover-icon">
              <span>Più dettagli</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
    </SwiperSlide>
  </Swiper>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

export default defineComponent({
  components: { Swiper, SwiperSlide },
  props: {
    items: {
      AddressLine: "",
      Typology:"",
      Price: 0,
      Description: "",
      TypeOfProperty:"",
      Title:"",
      Photos: [{
          Url: ""
      }]
    }
  },
  setup() {
    return {
      modules: [Navigation, Autoplay]
    }
  },
  // async mounted(){
  //   await this.getItems();
  // },
  // data() {
  //   return {
  //     items: []
  //   }
  // },
  // methods: {
  //   async getItems(){
  //     const result = await axios.get("https://thinkhomebe.azurewebsites.net/api/Generic/GetHomeDetails")
  //     this.items = result.data;
  //     console.log(this.items.RealEstatePropertiesHighlighted)
  //   }
  // }
})
</script>

<style>
.home-blog-image {
  border-radius: 5px;
  padding: 0;
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
