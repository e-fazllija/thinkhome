<template>
  <div :class="`contact-sidebar ${show ? ' active' : ''}`">
    <div class="contact-box">
      <div class="logo-contact logo-dark">
        <RouterLink to="?"
          ><img class="header_logo" src="@/assets/images/TH-pittogramma.jpg" alt=""
        /></RouterLink>
      </div>
      <div class="m-b50 contact-text">
        <div class="dz-title">
          <h4>Chi siamo</h4>
          <div class="dz-separator style-1 text-primary mb-0"></div>
        </div>
         <RouterLink to="/about-us" class="btn btn-primary btn-sm btn-rounded">READ MORE</RouterLink>
         <h2></h2>
         <RouterLink to="/all-agencies" class="btn btn-primary btn-sm btn-rounded">AGENZIE</RouterLink>
      </div>
      <div class="dz-title">
        <h4>I Nostri Servizi</h4>
        <div class="dz-separator style-1 text-primary mb-0"></div>
      </div>
      <RouterLink to="/vendita" class="btn btn-primary btn-sm btn-rounded">Immobili in Vendita</RouterLink>
      <h2></h2>
      <RouterLink to="/affitto" class="btn btn-primary btn-sm btn-rounded">Immobili in Affitto</RouterLink>
      <h2></h2>
      <RouterLink to="/valutazione-immobile" class="btn btn-primary btn-sm btn-rounded">Valutazione Immobile</RouterLink>
      <h2></h2>
      <RouterLink to="/pratiche-urbanistiche" class="btn btn-primary btn-sm btn-rounded">Pratiche Urbanistiche</RouterLink>
      <h2></h2>
      <RouterLink to="/pratiche-catastali" class="btn btn-primary btn-sm btn-rounded">Pratiche Catastali</RouterLink>
      <h2></h2>
      <RouterLink to="/perizie-stime-tribunale" class="btn btn-primary btn-sm btn-rounded">Perizie, Stime e Tribunale</RouterLink>
      <h2></h2>
      <RouterLink to="/investimenti-immobiliari" class="btn btn-primary btn-sm btn-rounded">Investimenti Immobiliari</RouterLink>
      <h2></h2>
      <RouterLink to="/edilizia" class="btn btn-primary btn-sm btn-rounded">Edilizia e Progettazione</RouterLink>
      <h2></h2>
      <RouterLink to="/servizi-vari" class="btn btn-primary btn-sm btn-rounded">Consulenza Creditizia e Servizi Vari</RouterLink>
      <!-- <div class="widget bg-white widget_gallery" style="z-index: 99999">
        <Lightgallery
          :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }"
          class="lightgallery m-b0"
        >
          <li v-for="({ img }, ind) in GalleryBlog" :key="ind">
            <div class="dlab-post-thum dlab-img-effect">
              <span :data-src="img" class="lightimg" title="Image 1 Title will come here">
                <img :src="img" alt="" />
              </span>
            </div>
          </li>
        </Lightgallery>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default defineComponent({
  props: {
    show: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  components: { Lightgallery },
  data: () => ({
    plugins: [lgThumbnail, lgZoom]
  }),
  // setup() {
  //   return {
  //     GalleryBlog: [
  //       { img: service_pic1 },
  //       { img: service_pic2 },
  //       { img: service_pic3 },
  //       { img: service_pic4 },
  //       { img: service_pic5 },
  //       { img: service_pic6 }
  //     ]
  //   }
  // }
})
</script>
