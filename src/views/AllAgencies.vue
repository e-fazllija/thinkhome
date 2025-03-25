<template>
  <div class="page-content bg-white">
    <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
      <div class="container-fluid">
        <div class="dz-bnr-inr-entry">
          <h1>Le Nostre Agenzie</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="breadcrumb-item">Agenzie</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row" v-for="(agency, index) in agencies" :key="index">
        <div class="col-md-4">
          <img :src="agency.image" :alt="agency.name" class="img-fluid rounded" />
        </div>
        <div class="col-md-8 d-flex flex-column justify-content-center">
          <div class="agency-card p-4 shadow-sm rounded border">
            <!-- Titolo dell'agenzia con stile personalizzato -->
            <h3 class="agency-name mb-3">{{ agency.name }}</h3>
            <div class="row">
              <!-- Colonna sinistra: Contatti (8/12) -->
              <div class="col-md-8">
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i style="color: #c0a480;" class="fas fa-map-marker-alt me-2"></i>
                    <strong class="agency-detail">Indirizzo: </strong>
                    <span class="agency-detail">{{ agency.address }}</span>
                  </li>
                  <li class="mb-2">
                    <i style="color: #c0a480;" class="fas fa-mobile-alt me-2"></i>
                    <strong class="agency-detail">Cellulare: </strong>
                    <span class="agency-detail">{{ agency.mobile }}</span>
                  </li>
                  <li class="mb-2">
                    <i style="color: #c0a480;" class="fas fa-phone me-2"></i>
                    <strong class="agency-detail">Telefono: </strong>
                    <span class="agency-detail">{{ agency.phone }}</span>
                  </li>
                  <li class="mb-2">
                    <i style="color: #c0a480;" class="fas fa-envelope me-2"></i>
                    <strong class="agency-detail">Email: </strong>
                    <span class="agency-detail">{{ agency.email }}</span>
                  </li>
                </ul>
              </div>
              <!-- Colonna destra: Bottone (4/12) -->
              <!-- <div class="col-md-4 d-flex align-items-center justify-content-center">
                <RouterLink :to="agency.link" class="btn btn-primary w-100">
                  Visita Ufficio
                </RouterLink>
              </div> -->
            </div>
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
          name: "Ufficio 1",
          address: "Viale Ungheria 91 - Zagarolo 00039, RM, Italia",
          mobile: "+39 333 9123388",
          phone: "+39 06 95595263",
          email: "info@thinkhome.it",
          image: "/src/assets/images/about/pic16.jpg", // Sostituire con immagine reale
          link: "/agenzia-1"
        },
        // {
        //   name: "Ufficio 2",
        //   address: "",
        //   mobile: "",
        //   phone: "",
        //   email: "",
        //   description: "",
        //   image: "/src/assets/images/about/pic16.jpg",
        //   link: "/agenzia-2"
        // }
      ]
    };
  }
})
</script>

<style scoped>
/* Stile per il nome dell'agenzia */
.agency-name {
  color: #25606f;
  /* Colore specifico */
  font-size: 1.5rem;
  /* Dimensione del testo più grande */
  font-weight: bold;
  /* Testo in grassetto */
}

/* Stile per i dettagli dell'agenzia (indirizzo, cellulare, telefono, email) */
.agency-detail {
  color: #333;
  /* Colore specifico */
  font-size: 1.1rem;
  /* Dimensione del testo più grande */
}

/* Stile per il bottone */
.agency-card .btn-primary {
  background-color: #25606f;
  /* Colore di sfondo del bottone */
  border-color: #25606f;
  /* Colore del bordo del bottone */
  max-width: 150px;
  /* Larghezza massima del bottone */
}

.agency-card .btn-primary:hover {
  background-color: #1a4a57;
  /* Colore di sfondo al passaggio del mouse */
  border-color: #1a4a57;
}

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