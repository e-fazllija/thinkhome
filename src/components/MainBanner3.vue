<template>
  <div class="slidearea ps-0">
    <div class="silder-three">
      <Swiper
        class="swiper-container main-silder-swiper-03"
        :modules="module"
        :speed="1500"
        :loop="true"
        :parallax="true"
        :pagination="pagination"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
        :autoplay="{ delay: 8000 }"
      >
        <SwiperSlide class="swiper-slide" v-for="({ img,title,description }, ind) in mainSlider" :key="ind">
          <div class="silder-content" data-swiper-parallax="-40%">
            <div class="container">
              <div class="inner-content row align-items-center g-0">
                <div class="col-md-6">
                  <div class="inner-text">
                    <h4 class="title">
                      {{title}}<br />
                    </h4>
                    <p>
                      {{description}} 
                    </p>
                    <div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="overlay-slide" data-swiper-parallax="100%">
                    <img :src="img" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-pagination style-2"></div>
        <div class="slider-three-pagination">
          <div class="btn-prev swiper-button-prev3 swiper-button-white">
            <i class="las la-angle-left"></i>
          </div>
          <div class="btn-next swiper-button-next3 swiper-button-white">
            <i class="las la-angle-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules'
import slide_pic1 from '@/assets/images/main-slider/slider3/home-Image1.jpg'
import slide_pic2 from '@/assets/images/main-slider/slider3/home-Image2.jpg'
import slide_pic3 from '@/assets/images/main-slider/slider3/home-Image3.jpg'


export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      mainSlider: [{ img: slide_pic1, title:'Progettazioni', description:`Offriamo servizi di progettazione per nuovi edifici e ristrutturazioni.
                      Dall’ideazione alla realizzazione, gestiamo tutte le fasi progettuali,
                      garantendo soluzioni innovative e funzionali.` },
      { img: slide_pic2, title:'Edilizia', description:`La nostra società immobiliare offre servizi completi di edilizia,
                      dalla progettazione alla realizzazione. Con un team di professionisti qualificati,
                      ci occupiamo di costruzioni, ristrutturazioni e manutenzioni. 
                      Siamo il partner ideale per chi cerca affidabilità e qualità in ogni fase del progetto edilizio.`},
      { img: slide_pic3, title:'Investimenti', description:`La nostra società immobiliare è specializzata
                      in investimenti immobiliari sicuri e redditizi.
                      Offriamo consulenza su misura per identificare le migliori opportunità, 
                      sia residenziali che commerciali. Grazie alla nostra esperienza, 
                      guidiamo i clienti verso scelte strategiche e vantaggiose nel mercato immobiliare.` }],
      module: [Navigation, Pagination, Autoplay, Parallax],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
        }
      }
    }
  }
})
</script>

<style scoped></style>
