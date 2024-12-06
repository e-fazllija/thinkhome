<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Immobili in vendita" text="Immobili in vendita" />
    <div class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 m-b30 dz-order-1" style="z-index: 99">
            <aside class="side-bar sticky-top left">
              <div class="widget widget_tag_cloud">
                <div class="widget-title">
                  <h4 class="title">Ricerca</h4>
                  <div class="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <div class="search-bx">
                  <form action="#">
                    <div class="input-group">
                      <input name="text" class="form-control" placeholder="Inserisci parola chiave..." type="text" v-model="filter" />
                      <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary sharp radius-no">
                          <i class="la la-search scale3"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="widget widget_categories">
                <div class="widget-title">
                  <h4 class="title">Categorie</h4>
                  <div class="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <ul>
                  <li class="cat-item">
                    <RouterLink to="?" @click="typologie = ''"><strong>Resetta filtri</strong></RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="?" @click="typologie = 'Appartamento'">Appartamento</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="?" @click="typologie = 'Villa'">Villa</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="?" @click="typologie = 'Villetta'">Villetta</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="?" @click="typologie = 'Abitazione indipendente'">Abitazione indipendente</RouterLink>
                  </li>
                  <li class="cat-item">
                    <RouterLink to="?" @click="typologie = 'Magazzino'">Magazzino</RouterLink>
                  </li>
                </ul>
              </div>
              <!-- <div class="widget recent-posts-entry">
                <div class="widget-title">
                  <h4 class="title">Annunci recenti</h4>
                  <div class="dz-separator style-1 text-primary mb-0"></div>
                </div>
                <div class="widget-post-bx">
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/blog-details"><img src="@/assets/images/blog/recent-blog/pic1.jpg" alt="" />
                      </RouterLink>
                    </div>
                    <div class="dz-info">
                      <h4 class="title">
                        <RouterLink to="/blog-details">Fusce mollis felis quis tristique</RouterLink>
                      </h4>
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">7 March, 2020</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </aside>
          </div>
          <div v-if="!loading" class="col-xl-8 col-lg-8">
            <div v-for="(item, ind) in results" :key="ind" class="dz-card blog-half style-1 m-b50 aos-item">
              <div class="dz-media">
                <Swiper class="swiper-container post-swiper" :speed="1500" :loop="true" :modules="modules" :navigation="{
                  prevEl: '.prev-post-swiper-btn',
                  nextEl: '.next-post-swiper-btn'
                }">
                  <SwiperSlide v-for="(photo, ind) in item.Photos.$values" :key="ind" class="swiper-slide">
                    <RouterLink :to="{name: 'dettaglio', params: {id: item.Id}}"><img :src="photo.Url" alt="" /></RouterLink>
                  </SwiperSlide>
                  <!-- <div class="prev-post-swiper-btn"><i class="la fa-angle-left"></i></div>
                  <div class="next-post-swiper-btn"><i class="la fa-angle-right"></i></div> -->
                </Swiper>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li>Cod. 00{{item.Id}}</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                 {{ item.AddressLine }}
                </h3>
                <div class="dz-post-text text">
                  <p>
                    {{ item.Description }}
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
        Description: "",
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
      const result = await axios.get(`https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/Get?currentPage=${_page}&filterRequest=${_filter}&status=Vendita&typologie=${_typologie}`);
      this.results = result.data.Data.$values;
      console.log(this.results)
      this.page = _page;
      this.totalPages = 1;
      if (result.data.Total > 10) {
        this.totalPages = result.data.Total / 10;
      }
      this.loading = false;
    }
  }
})
</script>

<style scoped></style>
