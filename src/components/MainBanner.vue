<template>
  <div class="slidearea ps-0" style="height: 100vh;">
    <div class="silder-one" style="height: 100vh;">
      <Swiper
        class="swiper-container main-silder-swiper-03"
        :speed="1500"
        :parallax="true"
        :modules="module"
        :pagination="pagination"
        :loop="false"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
      >
        <SwiperSlide class="swiper-slide">
          <div class="silder-img overlay-black-light" style="height: 100vh;">
            <img src="@/assets/images/TH 2-100.jpg" data-swiper-parallax="30%" 
            alt="" style=" width: 100%; height: 100%; 
            object-fit: cover; object-position:center 20%;"/>
            <!-- <video autoplay loop muted>
              <source :src="currentVideo" data-swiper-parallax="30%"  style="width: 80%;" type="video/mp4">
            </video>  -->
            <!-- <img src="@/assets/images/home-first.jpg" data-swiper-parallax="30%" alt="" style="filter: brightness(80%);"/> -->
          </div>
          <div class="silder-content" data-swiper-parallax="-40%">
            <div style="font-family: 'YourBolderFont', sans-serif; color: #3d6871; text-align: left;
                 position: relative; top: -100px;">
              <p style="font-size: 5rem; font-weight: bold; letter-spacing: -1px; line-height: 1.5; margin-bottom: 0rem;">
                 CASA È LA META,
              </p>
              <p style="font-size: 3.5rem; font-weight: bold; letter-spacing: -4px; line-height: 1.2; margin-bottom: 2rem;">
                 NOI LA DIREZIONE GIUSTA.
              </p>
              <RouterLink to="/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1" style=" display: inline-flex; align-items: center;
              background-color: #3d6871; border-radius: 50px; padding: 0.8rem 2rem; text-decoration: none; color: rgba(255,255,255,0.8);
              font-size: 2.2rem; font-weight: bold; letter-spacing: -3px; line-height: 1; gap: 0.5rem;">
              <span>PARTIAMO</span><i class="fas fa-arrow-right" style="font-size: 1.8rem;"></i>
              </RouterLink>
            </div>
            <!-- <div class="inner-content">
              <h1 class="title">ThinkHome</h1>
              <h3 class="title-small">Non solo case:
                <br /> il nostro nuovo sito ti offre un servizio a 360° per ogni esigenza abitativa,
                <br /> dalla consulenza iniziale all’assistenza continua.
                <br />Scopri la differenza!</h3>
            </div> -->
            <!-- <div class="overlay-slide" data-swiper-parallax="100%"></div> -->
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Pagination, Navigation } from 'swiper/modules'
import video from '@/assets/video/home.mp4'
import videoSmall from '@/assets/video/homeSmall.mp4'

export default defineComponent({
  name: 'mainBanner',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      module: [Parallax, Pagination, Navigation]
    }
  },
  data() {
    return {
      currentVideo: video, // Percorso predefinito del video
    };
  },
  methods: {
    updateVideo() {
      const screenWidth = window.innerWidth; // Ottieni larghezza dello schermo
      if (screenWidth < 991) {
        this.currentVideo = videoSmall; // Video per schermi piccoli
      } else {
        this.currentVideo = video; // Video per schermi grandi
      }
    },
  },
  mounted() {
    this.updateVideo(); // Imposta il video iniziale
    window.addEventListener("resize", this.updateVideo); // Aggiungi listener per il resize
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateVideo); // Rimuovi listener
  }
})
</script>
<style>
@media (max-width: 991px) {
  .silder-content {
    top: -150px !important; /* Spostamento ridotto */
  }
  
  .silder-content p:first-child {
    font-size: 3rem !important; /* Riduci dimensione titolo */
    line-height: 1.1 !important;
    letter-spacing: -0.5px !important;
    margin-bottom: 0.5rem !important;
  }
  
  .silder-content p:nth-child(2) {
    font-size: 2rem !important; /* Riduci dimensione sottotitolo */
    letter-spacing: -2px !important;
    margin-bottom: 1.5rem !important;
    line-height: 1.1 !important;
  }
  
  .silder-content a {
    font-size: 1.8rem !important; /* Riduci dimensione bottone */
    padding: 0.6rem 1.2rem !important;
    letter-spacing: -2px !important;
  }
  
  .silder-content i {
    font-size: 1.8rem !important; /* Riduci dimensione icona */
  }
}
.title-small {
  font-family: ui-rounded;
  letter-spacing: -3px;  /* Avvicina i caratteri */
  
}
@media screen and (max-width: 768px) {
  .video-container {
    padding-bottom: 177.77%; /* Mantieni il rapporto 9:16 */
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Adatta il video */
  }
}
@media screen and (max-width: 991px) {
  .video-container {
    padding-bottom: 177.77%; /* Mantieni il rapporto 9:16 */
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Adatta il video */
  }
}
@media only screen and (max-width: 1680px) {
    .silder-one .silder-content .title-small {
        font-size: 50px;
    }
  }
  @media only screen and (max-width: 991px) {
    .silder-one .silder-content .title-small {
        font-size: 30px;
    }
  }

</style>

