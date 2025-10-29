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

    <div class="content-inner">
      <div class="container">
        <Loader v-if="loading" :fullscreen="false" :show-text="true" />
        <div v-else class="row" v-for="(agency, index) in agencies" :key="agency.id">
          <div class="col-md-4 d-none d-md-block">
            <div class="agency-image-container rounded" style="background-color: #25606f">
              <img src="/src/assets/images/about/pic16.jpg" :alt="agency.name" class="img-fluid rounded" />
            </div>
          </div>
          <div class="col-md-8 d-flex flex-column justify-content-center mb-3 mb-md-0">
            <div class="agency-card p-4 shadow-sm rounded border">
              <h3 class="agency-name mb-3">{{ agency.name }} {{ agency.lastName }}</h3>
              <div class="row">
                <div class="col-md-8">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <i style="color: #c0a480;" class="fas fa-map-marker-alt me-2"></i>
                      <strong class="agency-detail">Indirizzo: </strong>
                      <span class="agency-detail">{{ agency.address }}, {{ agency.town }}</span>
                    </li>
                    <li class="mb-2" v-if="agency.mobilePhone">
                      <i style="color: #c0a480;" class="fas fa-mobile-alt me-2"></i>
                      <strong class="agency-detail">Cellulare: </strong>
                      <span class="agency-detail">{{ agency.mobilePhone }}</span>
                    </li>
                    <li class="mb-2">
                      <i style="color: #c0a480;" class="fas fa-phone me-2"></i>
                      <strong class="agency-detail">Telefono: </strong>
                      <span class="agency-detail">{{ agency.phoneNumber }}</span>
                    </li>
                    <li class="mb-2">
                      <i style="color: #c0a480;" class="fas fa-envelope me-2"></i>
                      <strong class="agency-detail">Email: </strong>
                      <span class="agency-detail">{{ agency.email }}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 d-flex align-items-center justify-content-end">
                  <RouterLink :to="'/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1/'+ agency.id" class="btn btn-primary rounded-5 py-3 px-4 w-75" 
                  style=" background-color: #25606f; border-color: #25606f; font-size: 0.9rem;">
                <i></i> Visualizza Immobili
                </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Paginazione -->
        <!-- <div class="row mt-4" v-if="agencies.length > 0">
      <div class="col-12">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="getAgencies(currentPage - 1)">Precedente</button>
            </li>
            <li 
              class="page-item" 
              v-for="page in totalPages" 
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <button class="page-link" @click="getAgencies(page)">{{ page }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button class="page-link" @click="getAgencies(currentPage + 1)">Successiva</button>
            </li>
          </ul>
        </nav>
      </div>
    </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { apiService } from '@/services/apiService'
import CommonBanner from '@/elements/CommonBanner.vue'
import Loader from '@/elements/Loader.vue'
import bannerImg from '@/assets/images/banner/1920x700.jpg'
import bg1 from '@/assets/images/background/bg1.png'

interface Agency {
  id: string;
  name: string;
  lastName: string;
  address: string;
  mobilePhone: string | null;
  phoneNumber: string;
  email: string;
  town: string;
  region: string;
  referent: string;
  color: string;
}

export default defineComponent({
  setup() {
    return {
      bannerImg,
      bg1,
    }
  },
  components: { CommonBanner, Loader },
  data() {
    return {
      agencies: [] as Agency[],
      loading: false,
      totalPages: 1,
      currentPage: 1
    }
  },
  mounted() {
    this.getAgencies(1);
  },
  methods: {
    async getAgencies(page: number) {
      this.loading = true;
      try {
        const result = await apiService.getAgencies(page);

        this.agencies = result.Data.map((agency: any) => ({
          id: agency.Id,
          name: agency.Name || `${agency.LastName} ${agency.Name}`,
          lastName: agency.LastName || `${agency.LastName} ${agency.Name}`,
          address: agency.Address || `${agency.Town}, ${agency.Region}`,
          mobilePhone: agency.MobilePhone,
          phoneNumber: agency.PhoneNumber,
          email: agency.Email,
          town: agency.Town,
          region: agency.Region,
          referent: agency.Referent || agency.UserName,
          color: agency.Color
        }));

        const totalItems = result.Total;
        this.totalPages = totalItems > 0 ? Math.ceil(totalItems / 10) : 1;
        this.currentPage = page;
      } catch (error) {
        console.error("Errore nel recupero delle agenzie:", error);
      } finally {
        this.loading = false;
      }
    }
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