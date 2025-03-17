<template>
  <div class="page-content bg-white">
    <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
      <div class="container-fluid">
        <div class="dz-bnr-inr-entry">
          <h1>Le Nostre Agenzie</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
              <li class="breadcrumb-item">Agenzie</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    
    <div class="container my-5">
      <div class="row" v-for="(agency, index) in agencies" :key="index">
        <div class="col-md-4">
          <img :src="agency.image" :alt="agency.name" class="img-fluid rounded" />
        </div>
        <div class="col-md-8 d-flex flex-column justify-content-center">
          <div class="agency-card p-4 shadow-sm rounded border">
            <h3>{{ agency.name }}</h3>
            <p>{{ agency.description }}</p>
            <RouterLink :to="agency.link" class="btn btn-primary">Visita Agenzia</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import { defineComponent } from 'vue'
import bannerImg from '@/assets/images/banner/1920x700.jpg'
import bg1 from '@/assets/images/background/bg1.png'


export default defineComponent({
  setup() {
      return {
          bannerImg,
          bg1,
      }
  },
  components: { CommonBanner },
  data() {
    return {
      agencies: [
        {
          name: "Agenzia 1",
          description: "Questa è la descrizione della prima agenzia.",
          image: "/src/assets/images/about/pic16.jpg", // Sostituire con immagine reale
          link: "/agenzia-1"
        },
        {
          name: "Agenzia 2",
          description: "Questa è la descrizione della seconda agenzia.",
          image: "/src/assets/images/about/pic16.jpg", // Sostituire con immagine reale
          link: "/agenzia-2"
        }
      ]
    };
  }
})
</script>

<style scoped>
@media screen and (max-width: 991px) {

.col-sm-12 {
flex: 0 0 auto;
width: 100%;
}
}

@media screen and (max-width: 575px) {

.col-sm-12 {
flex: 0 0 auto;
width: 100%;
}
}

@media screen and (max-width: 400px) {

.col-sm-12 {
flex: 0 0 auto;
width: 100%;
}
}
</style>