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

    <!-- Content Section -->
    <div class="agencies-content">
      <div class="container">
        <Loader v-if="loading" :fullscreen="false" :show-text="true" />
        <div v-else>
          <div v-if="agencies.length === 0" class="agencies-empty">
            <div class="agencies-empty-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3>Nessuna agenzia disponibile</h3>
            <p>Al momento non ci sono agenzie da visualizzare.</p>
          </div>
          <div v-else class="agencies-list">
            <div
              v-for="(agency, index) in agencies"
              :key="agency.id"
              class="agency-card-wrapper"
            >
              <div class="agency-card-container">
                <!-- Agency Image -->
                <div class="agency-image-wrapper d-none d-md-block">
                  <img
                    src="/src/assets/images/about/pic16.jpg"
                    :alt="`${agency.name} ${agency.lastName}`"
                    class="img-fluid"
                  />
                </div>
                <!-- Agency Info -->
                <div class="agency-info-section">
                  <h3 class="agency-name">{{ agency.name }} {{ agency.lastName }}</h3>
                  <div class="row">
                    <div class="col-12 col-lg-8">
                      <ul class="agency-details-list">
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          <div>
                            <span class="agency-detail-label">Indirizzo:</span>
                            <span class="agency-detail-value">{{ agency.address }}, {{ agency.town }}</span>
                          </div>
                        </li>
                        <li v-if="agency.mobilePhone">
                          <i class="fas fa-mobile-alt"></i>
                          <div>
                            <span class="agency-detail-label">Cellulare:</span>
                            <span class="agency-detail-value">{{ agency.mobilePhone }}</span>
                          </div>
                        </li>
                        <li>
                          <i class="fas fa-phone"></i>
                          <div>
                            <span class="agency-detail-label">Telefono:</span>
                            <span class="agency-detail-value">{{ agency.phoneNumber }}</span>
                          </div>
                        </li>
                        <li>
                          <i class="fas fa-envelope"></i>
                          <div>
                            <span class="agency-detail-label">Email:</span>
                            <span class="agency-detail-value">{{ agency.email }}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-12 col-lg-4 d-flex align-items-center justify-content-start justify-content-lg-end">
                      <RouterLink
                        :to="`/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1/${agency.id}`"
                        class="agency-action-button"
                      >
                        <i class="fas fa-search"></i>
                        Visualizza Immobili
                      </RouterLink>
                    </div>
                  </div>
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
import Loader from '@/elements/Loader.vue'

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
  components: { Loader },
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
/* Gli stili sono gestiti dal file CSS all-agencies.css */
/* Questo blocco può essere rimosso o utilizzato per override specifici se necessario */
</style>