<template>
  <div class="slidearea ps-0 main-banner3">
    <div class="silder-three">
      <Swiper
        class="swiper-container main-silder-swiper-03"
        :modules="module"
        :speed="3000"
        :loop="true"
        :parallax="true"
        :pagination="pagination"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
        :autoplay="{ delay: 4000 }"
      >
        <SwiperSlide class="swiper-slide" v-for="({ img, title, description }, ind) in mainSlider" :key="ind">
          <div 
            class="dz-bnr-inr style-1" 
            :style="`background-image: url(${img});`"
          >
            <div class="container">
              <div class="dz-bnr-inr-entry">
                <h1>{{ title }}</h1>
                <div class="inner-text">
                  <span class="text-white">{{ description }}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
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
import slide_pic4 from '@/assets/images/main-slider/slider3/home-Image9.jpg'
import slide_pic5 from '@/assets/images/main-slider/slider3/home-Image11.jpg'



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
                      guidiamo i clienti verso scelte strategiche e vantaggiose nel mercato immobiliare.` },
      { img: slide_pic4, title:'Vendita Affitto', description:`Scopri le migliori opportunità per vendere o affittare il tuo immobile.
                      Con soluzioni personalizzate e un supporto professionale,
                      ti aiutiamo a massimizzare il valore e a trovare rapidamente l'acquirente o l’inquilino perfetto!` },
      { img: slide_pic5, title:'Valutazione', description:`Richiedi una valutazione professionale del tuo immobile.
                     Con la nostra esperienza e un'analisi accurata del mercato,
                     ti aiutiamo a conoscere il reale valore della tua proprietà per prendere decisioni strategiche e vantaggiose!` }],
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
