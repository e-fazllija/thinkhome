<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <button class="mfp-close" style="top: -23px" data-bs-dismiss="modal" aria-label="Close">
          <i class="ti-close"></i>
        </button>
        <iframe height="100%" src="https://www.youtube.com/embed/sNCv3_NTNtU" frameborder="0" allowfullscreen
          allow="autoplay"></iframe>
      </div>
    </div>
  </div>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr7" title="Dettaglio" text="Dettaglio" />
    <div class="content-inner-2">
      <div v-if="item" class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 align-self-center aos-item mb-5">
            <h1>titolooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</h1>
          </div>
        </div>
        <div class="row justify-content-center mb-5">
            <img :src="imgSelected" alt="" />
        </div>
        <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">
          <Swiper class="swiper-container swiper-portfolio lightgallery aos-item" :slides-per-view="4"
            :space-between="30" :loop="true" :breakpoints="{
              // 1391: { slidesPerView: 3 },
              // 975: { slidesPerView: 2 },
              // 640: { slidesPerView: 1 }
              1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 }
            }" :modules="module" :autoplay="{ delay: 1500 }" :speed="1500">
            <SwiperSlide class="swiper-slide" v-for="({ Url }, ind) in photos" :key="ind">
              <div :class="`dz-box overlay style-1 mt-5`">
                <div class="dz-media">
                  <img :src="Url" alt="" @click="selectImage(Url)" />
                </div>
                <!-- <div class="dz-info">
                  <span :data-src="Url" class="view-btn lightimg">
                    <img :src="Url" alt="" style="display: none" />
                  </span>
                </div> -->
              </div>
            </SwiperSlide>
          </Swiper>
        </Lightgallery>
      </div>
    </div>
    <section class="section-full content-inner-2 port-detail" :style="`background-image: url(${bg2});
          background-position: right bottom;
          background-size: 100%;
          background-repeat: no-repeat;`">
      <div class="container">
        <div class="row mb-lg-5 mb-3">
          <!-- <div class="col-lg-12 col-md-12 m-b50 aos-item m-sm-b30">
              <img src="@/assets/images/work/pic1.jpg" alt="" />
            </div> -->
          <div class="col-lg-5 col-md-5 align-self-center aos-item">
            <h2 class="dz-title">{{ item.Id }}</h2>
            <p>
              {{ item.Description }}
            </p>
            <div class="icon-bx-wraper style-7 left m-b30">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-placeholder"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Indirizzo</h4>
                <p>{{ item.AddressLine }} {{ item.Town }} {{ item.PostCode }} {{ item.State }}</p>
              </div>
            </div>
            <div class="icon-bx-wraper style-7 left m-b30">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-telephone"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Contatti</h4>
                <p>info@thinkhome.it</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 aos-item">
            <img src="@/assets/images/work/pic3.jpg" alt="" />
          </div>
          <!-- <div class="col-lg-6 col-md-12 m-b30 aos-item">
              <img src="@/assets/images/work/pic2.jpg" class="d-lg-block d-none" alt="" />
            </div> -->
        </div>
      </div>
    </section>

    <section class="content-inner-1">
      <div class="container-fluid">
        <Home3Accordian />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import bnr7 from '@/assets/images/banner/bnr7.jpg'
import CommonBanner from '@/elements/CommonBanner.vue'
import bg2 from '@/assets/images/background/bg2.png'
import service_pic1 from '@/assets/images/services/pic1.jpg'
import service_pic2 from '@/assets/images/services/pic2.jpg'
import service_pic3 from '@/assets/images/services/pic3.jpg'
import work_pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-3.jpg'
import work_pic4 from '@/assets/images/work/work-1/pic-4.jpg'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import axios from 'axios'
import Home3Accordian from '@/components/Home3Accordian.vue'

export default defineComponent({
  components: { CommonBanner, Lightgallery, Swiper, SwiperSlide, Home3Accordian },
  setup() {
    return {
      bnr7,
      bg2,
      galleryBlog: [{ img: service_pic1 }, { img: service_pic2 }, { img: service_pic3 }],
      ourBlog: [
        {
          img: work_pic1,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern House Interior',
          text: 'New York',
          setStyle: 'mt-5'
        },
        {
          img: work_pic2,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project,',
          text: 'Paris'
        },
        {
          img: work_pic3,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern Family House,',
          text: 'Italy',
          setStyle: 'mt-5'
        },
        {
          img: work_pic4,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project, ',
          text: 'Paris'
        },
        {
          img: work_pic2,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project,',
          text: 'Paris',
          setStyle: 'mt-5'
        }
      ],
      module: [Autoplay]
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      plugins: [lgThumbnail, lgZoom],
      imgSelected: "",
      photos:[{
        Url: ""
      }],
      item: {
        Id: 0,
        AddressLine: "",
        Town: "",
        PostCode: "",
        State: "",
        Price: 0,
        Description: "",
        Photos: {
          $values: [{
            Url: ""
          }]
        }
      },
    }
  },
  methods: {
    async getAnswer() {
      const { data } = await axios.get("https://yesno.wtf/api");
    },
    async getItem() {
      const result = await axios.get("https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/GetById?id=" + this.$route.params.id);
      this.item = result.data;
      this.photos = result.data.Photos.$values;
      this.imgSelected = this.photos[0].Url;
      // this.loading = false;
    },
    selectImage(url: string){
      this.imgSelected = url;
    }
  },
  async beforeMount() {
    this.getAnswer();
    await this.getItem();
  }
})
</script>
<style scoped>
.modal-content {
  height: 390px;
  z-index: 99999;
}

@media screen and (max-width: 991px) {
  .modal-content {
    height: 282px;
  }
}

@media screen and (max-width: 575px) {
  .modal-content {
    height: 30vmax;
  }
}

@media screen and (max-width: 400px) {
  .modal-content {
    height: 23vmax;
  }
}

.mfp-close {
  border: none;
  outline: none;
  position: absolute;
  right: 0px;
  background-color: transparent;
  color: white;
}
</style>