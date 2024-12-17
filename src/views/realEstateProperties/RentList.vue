<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Immobili in affitto" text="Immobili in affitto" />
    <div class="content-inner">
      <div class="container">
        <div class="row justify-content-center">
          <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
          <div v-if="!loading" class="col-xl-8 col-lg-8">
            <div v-for="(item, ind) in results" :key="ind" class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-media">
                <Swiper class="swiper-container post-swiper" 
                :speed="1500" 
                :loop="true" 
                :modules="modules" 
                :navigation="{
                  prevEl: '.prev-post-swiper-btn',
                  nextEl: '.next-post-swiper-btn'
                }">
                  <SwiperSlide v-for="(photo, ind) in item.Photos.$values" :key="ind" class="swiper-slide">
                    <RouterLink :to="{name: 'dettaglio', params: {id: item.Id}}"><img :src="photo.Url" alt="" 
                      style="border-radius: 5px; padding: 0px; height: 400px; object-fit: cover;"
                      /></RouterLink>
                  </SwiperSlide>
                  <div class="prev-post-swiper-btn"><i class="la fa-angle-left"></i></div>
                  <div class="next-post-swiper-btn"><i class="la fa-angle-right"></i></div>
                </Swiper>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <h1>€ {{item.Price}}</h1>
                    <li>Cod. 00{{item.Id}}</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                 {{ item.AddressLine }}
                </h3>
                <div class="dz-post-text text">
                  <p>
                    {{ item.ShortDescription}}
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink :to="{name: 'dettaglio', params: {id: item.Id}}" class="btn btn-primary btn-rounded btn-sm hover-icon"><span>Dettaglio </span><i
                      class="fas fa-arrow-right"></i></RouterLink>
                </div>
              </div>
            </div>
            <BlogPagination :currentPage="page" :totalPages="totalPages" :filter="filter" :typologie="typologie" @changePage="getItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr3 from '@/assets/images/banner/bnr3.jpg'
import BlogLeftContent from '@/components/BlogLeftContent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import BlogPagination from '@/elements/BlogPagination.vue'
import axios from 'axios'

export default defineComponent({
  name: 'blog_list_sidebar',
  components: { CommonBanner, BlogLeftContent, Swiper, SwiperSlide, BlogPagination },

  setup() {
    return {
      bnr3,

      modules: [Navigation, Autoplay]
    }
  },
  async beforeMount() {
    await this.getItems(1, "", "");
  },
  data() {
    return {
      loading: true,
      page: 1,
      totalPages: 1,
      filter: "",
      typologie: "",
      results: [{
        Id: 0,
        AddressLine: "",
        Price: 0,
        ShortDescription: "",
        Photos: [{
          $values: {
            Url: ""
          }
        }]
      }]
    }
  },
  watch: {
    async filter(val){
      this.getItems(1, val, this.typologie);
    },
    async typologie(val){
      this.getItems(1, this.filter, val);
    }
  },
  methods: {
    async getItems(_page, _filter, _typologie) {
      const result = await axios.get(`https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/Get?currentPage=${_page}&filterRequest=${_filter}&status=Affitto&typologie=${_typologie}`);
      this.results = result.data.Data.$values;
      this.page = _page;
      this.totalPages = 1;
      if (result.data.Total > 10) {
        this.totalPages = Math.ceil(result.data.Total / 10);
      }
      this.loading = false;
    }
  }
})
</script>

<style scoped></style>
