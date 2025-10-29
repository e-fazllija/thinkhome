<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Aste Immobiliari" text="Aste Immobiliari" />
    
    <PropertySearchForm 
      title="Trova la tua Operazione Immobiliare"
      :default-request-type="formData.RequestType"
      :default-property-type="formData.PropertyType"
      :default-location="formData.Location"
      :default-code="formData.Code"
      :default-from="formData.From"
      :default-to="formData.To"
      @submit="handleSearchSubmit"
    />
    
    <div class="content-inner">
  <div class="container">
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center w-100">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-if="!loading">
        <div class="row">
          <div v-for="(item, ind) in results" :key="ind" class="col-xl-6 col-lg-6 col-md-6 mb-4">
            <div class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-media">
                <Swiper class="swiper-container post-swiper" :speed="1500" :loop="true" :modules="modules" :navigation="{
                  prevEl: '.prev-post-swiper-btn',
                  nextEl: '.next-post-swiper-btn'
                }">
                  <SwiperSlide v-for="(photo, ind) in item.Photos" :key="ind" class="swiper-slide">
                    <RouterLink :to="{ name: 'dettaglio', params: { id: item.Id } }" target="_blank"><img :src="photo.Url" alt=""
                        style="border-radius: 5px; padding: 0px; height: 400px; object-fit: cover;" /></RouterLink>
                  </SwiperSlide>
                  <div class="prev-post-swiper-btn"><i class="la fa-angle-left"></i></div>
                  <div class="next-post-swiper-btn"><i class="la fa-angle-right"></i></div>
                </Swiper>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <p>Cod. 00{{ item.Id }}</p>
           <h1 class="sub-title text-primary">
            <template v-if="item.Price === -1">
                <span>Trattativa riservata</span>
            </template>
            <template v-else-if="item.PriceReduced && item.PriceReduced > 0">
                <span>€ {{ item.PriceReduced.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00</span>
                <small class="d-block text-muted" style="text-decoration: line-through;">
                € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00
                </small>
            </template>
            <template v-else>
                <span :class="{ 'text-muted': item.Sold }" :style="item.Sold ? 'text-decoration: line-through;' : ''">
                € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00
                </span>
            </template>
                <span v-if="item.Sold" class="badge ms-2" style="background-color: #3d6871; color: white;">Venduto</span>
                <span v-if="!item.Sold && item.Negotiation" class="badge ms-2" style="background-color: #c0a480; color: white;">In Trattativa</span>
          </h1>
              <h3> {{ item.Town }}</h3>
                <h3><i class="fa fa-map-pin"></i> {{item.AddressLine }}</h3>
              <h6> {{ item.TypeOfProperty }}</h6>
              <h6><img src="@/assets/images/energy.png" /> {{ item.EnergyClass }}
              </h6>
              <p>
                {{ item.Description.substring(0, 250) }}...
              </p>
                </div>
                <div class="read-more">
                  <RouterLink :to="{ name: 'dettaglio', params: { id: item.Id } }" target="_blank"
                    class="btn btn-primary btn-rounded btn-sm hover-icon"><span>Dettaglio </span><i
                      class="fas fa-arrow-right"></i></RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
            <BlogPagination 
            v-if="!loading"
            :currentPage="page" 
            :totalPages="totalPages" 
            :filter="filter" 
            :typologie="typologie"
            :location="location"
            :code="code"
            :from="from"
            :to="to"
            :agencyId="agencyId"
              @changePage="handlePageChange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import PropertySearchForm from '@/components/PropertySearchForm.vue'
import bnr3 from '@/assets/images/banner/bnr46.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import BlogPagination from '@/elements/BlogPagination.vue'
import { apiService } from '@/services/apiService'

export default defineComponent({
  name: 'auctions-list',
  components: { CommonBanner, PropertySearchForm, Swiper, SwiperSlide, BlogPagination },
  setup() {
    return {
      bnr3,
      modules: [Navigation, Autoplay]
    }
  },
  data() {
    return {
      loading: true,
      typologie: this.$route.params.tipologia,
      location: this.$route.params.localita,
      code: this.$route.params.codice,
      from: this.$route.params.da,
      to: this.$route.params.a,
      agencyId: this.$route.params.agencyId,
      page: 1,
      totalPages: 1,
      filter: "",
      formData: {
        RequestType: "Aste",
        PropertyType: "Qualsiasi",
        Location: null,
        Code: null,
        From: 0,
        To: -1,
        agencyId: this.agencyId,
      },
      results: [{
        Id: 0,
        AddressLine: "",
        Typology:"",
        Price: 0,
        ShortDescription: "",
        TypeOfProperty:"",
        Photos: [{
            Url: ""
        }]
      }]
    }
  },
  async beforeMount() {
    await this.getItems(1, "", this.typologie, this.location, this.code, this.from, this.to, this.agencyId);
  },
  methods: {
  async getItems(_page, _filter, _typologie, _location, _code, _from, _to, _agencyId) {
    this.loading = true;
    const result = await apiService.getRealEstateProperties({
      currentPage: _page,
      filterRequest: _filter,
      status: 'Aste',
      typologie: _typologie,
      location: _location,
      code: _code,
      from: _from,
      to: _to,
      agencyId: _agencyId,
      city: this.$route.params.city
    });
    this.results = result.Data;
    const totalItems = result.Total;
    this.totalPages = totalItems > 0 ? Math.ceil(totalItems / 10) : 1;
    this.loading = false;
  },
  async handlePageChange(newPage) {
    this.page = newPage;
    await this.getItems(this.page, this.filter, this.typologie, this.location, this.code, this.from, this.to, this.agencyId);
  },
  async handleSearchSubmit(formData) {
    this.loading = true;
    this.typologie = formData.PropertyType;
    
    // Parsifica la località selezionata
    const { city, location } = formData.parseLocation(formData.Location)
    this.location = location || "Qualsiasi";
    
    this.code = formData.Code ?? 0;
    this.from = formData.From;
    this.to = formData.To;

    // Aggiorna formData locale
    this.formData = { ...formData };

    if (formData.RequestType === "Aste") {
      // Aggiorna l'URL della pagina corrente
      await this.$router.push({
        name: 'aste_immobiliari',
        params: {
          tipologia: this.typologie,
          localita: this.location, 
          codice: this.code, 
          da: this.from, 
          a: this.to, 
          agencyId: this.agencyId,
          city: city || ""
        }
      });
      
      // Poi fai la chiamata API
      await this.getItems(1, "", this.typologie, this.location, this.code, this.from, this.to, this.agencyId);
    } else {
      let routeName;
      if (formData.RequestType === "Affitto") {
        routeName = "immobili_in_affitto";
      } else if (formData.RequestType === "Vendita") {
        routeName = "immobili_in_vendita";
      }

      this.$router.push({
        name: routeName,
        params: {
          tipologia: this.typologie,
          localita: this.location, 
          codice: this.code, 
          da: this.from, 
          a: this.to, 
          agencyId: this.agencyId,
          city: city || ""
        }
      });
    }
    this.loading = false;
  }
}
})
</script>

<style scoped>
.dz-info {
  width: 590px; /* Larghezza fissa, puoi modificarla */
  height: 450px; /* Altezza fissa, puoi modificarla */
  display: flex; /* Per allineare il contenuto */
  justify-content: space-between; /* Spazia gli elementi uniformemente */
  box-sizing: border-box; /* Include il padding nella dimensione totale */
  border-radius: 5px; /* Angoli arrotondati */
  background-color: #f9f9f9; /* Colore di sfondo */
}
@media (max-width: 768px) {
  .dz-info {
    width: 100%; /* Adatta alla larghezza del contenitore genitore */
    height: auto; /* Altezza flessibile per contenuti variabili */
    padding: 15px; /* Riduce il padding per schermi più piccoli */
  }
}
</style>
