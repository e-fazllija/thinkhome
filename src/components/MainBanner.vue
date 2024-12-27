<template>
  <div class="slidearea ps-0" style="height: 100vh;">
    <div class="silder-one" style="height: 100vh;">
      <Swiper
        class="swiper-container main-silder-swiper-03"
        :speed="1500"
        :parallax="true"
        :modules="module"
        :pagination="pagination"
        :loop="true"
        :navigation="{
          prevEl: '.btn-prev',
          nextEl: '.btn-next'
        }"
      >
        <SwiperSlide class="swiper-slide">
          <div class="silder-img overlay-black-light" style="height: 100vh;">
            <video autoplay loop muted>
              <source :src="currentVideo" data-swiper-parallax="30%"  style="width: 100%;" type="video/mp4">
            </video> 
            <!-- <img src="@/assets/images/home-first.jpg" data-swiper-parallax="30%" alt="" style="filter: brightness(80%);"/> -->
          </div>
          <div class="silder-content" data-swiper-parallax="-40%">
            <div class="inner-content">
              <h1 class="title">ThinkHome</h1>
              <h3 class="title-small">Non solo case:
                <br /> il nostro nuovo sito ti offre un servizio a 360° per ogni esigenza abitativa,
                <br /> dalla consulenza iniziale all’assistenza continua.
                <br />Scopri la differenza!</h3>
            </div>
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

