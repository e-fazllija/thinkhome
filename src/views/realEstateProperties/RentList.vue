<template>
  <div class="page-content bg-white">

    <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
      <div class="container-fluid">
        <div class="dz-bnr-inr-entry">
          <h1>Immobili in Affitto</h1>
          <!-- Breadcrumb Row -->
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="breadcrumb-item">Immobili in Affitto</li>
            </ul>
          </nav>
          <!-- Breadcrumb Row End -->
        </div>
      </div>
    </div>

    <section class="content-inner-3 bg-white line-img">
      <form class="container" @submit.prevent="submit()">
        <div class="contact-area aos-item mt-0">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">Trova il tuo immobile</h6>
          </div>
          <div class="row align-items-center about-bx3 mb-3">
            <div class="col-lg-4 mb-3">
              <select class="form-control" v-model="formData.PropertyType">
                <option value="Qualsiasi">Tipologia</option>
                <option value="Appartamento">Appartamento</option>
                <option value="Attico">Attico</option>
                <option value="Mansarda">Mansarda</option>
                <option value="Loft">Loft</option>
                <option value="Soffitta">Soffitta</option>
                <option value="Casale">Casale</option>
                <option value="Rustico">Rustico</option>
                <option value="Villa Unifamiliare">Villa Unifamiliare</option>
                <option value="Villa Bifamiliare">Villa Bifamiliare</option>
                <option value="Villa Plurifamiliare">Villa Plurifamiliare</option>
                <option value="Villa a Schiera">Villa a Schiera</option>
                <option value="Locale commerciale">Locale commerciale</option>
                <option value="Negozio">Negozio</option>
                <option value="Ufficio">Ufficio</option>
                <option value="Capannone artigianale">Capannone artigianale</option>
                <option value="Capannone industriale">Capannone industriale</option>
                <option value="Box singolo">Box singolo</option>
                <option value="Box doppio">Box doppio</option>
                <option value="Posto auto">Posto auto</option>
                <option value="Edificabile">Edificabile</option>
                <option value="Agricolo">Agricolo</option>
                <option value="Non Edificabile">Non Edificabile</option>n>
              </select>
            </div>
            <div class="col-lg-4 mb-3">
              <select class="form-control" v-model="formData.RequestType">
                <option value="Vendita">Vendita</option>
                <option value="Affitto">Affitto</option>
                <option value="Aste">Aste</option>

              </select>
            </div>
            <div class="col-lg-4 mb-3">
              <input placeholder="Località" class="form-control" list="datalistOptions" v-model="formData.Location">
              <datalist id="datalistOptions">
                <option v-for="option in locationOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </datalist>
            </div>
          </div>
          <div class="row align-items-center about-bx3 mb-4">
            <div class="col-lg-4 mb-4">
              <div>
                <input type="number" class="form-control" placeholder="Cod. Immobile" v-model="formData.Code" />
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <select class="form-control" v-model="formData.From">
                <option value="0">Prezzo Minimo</option>
                <option value="0">€ 0</option>
                <option value="50000">€ 50,000</option>
                <option value="100000">€ 100,000</option>
                <option value="150000">€ 150,000</option>
                <option value="200000">€ 200,000</option>
                <option value="250000">€ 250,000</option>
                <option value="300000">€ 300,000</option>
                <option value="350000">€ 350,000</option>
                <option value="400000">€ 400,000</option>
                <option value="450000">€ 450,000</option>
                <option value="500000">€ 500,000</option>
                <option value="550000">€ 550,000</option>
                <option value="600000">€ 600,000</option>
                <option value="650000">€ 650,000</option>
                <option value="700000">€ 700,000</option>
                <option value="750000">€ 750,000</option>
                <option value="800000">€ 800,000</option>
                <option value="850000">€ 850,000</option>
                <option value="900000">€ 900,000</option>
                <option value="950000">€ 950,000</option>
                <option value="1000000">€ 1,000,000</option>
              </select>
            </div>
            <div class="col-lg-4 mb-4">
              <select class="form-control" v-model="formData.To">
                <option value="-1">Prezzo Massimo</option>
                <option value="0">€ 0</option>
                <option value="50000">€ 50,000</option>
                <option value="100000">€ 100,000</option>
                <option value="150000">€ 150,000</option>
                <option value="200000">€ 200,000</option>
                <option value="250000">€ 250,000</option>
                <option value="300000">€ 300,000</option>
                <option value="350000">€ 350,000</option>
                <option value="400000">€ 400,000</option>
                <option value="450000">€ 450,000</option>
                <option value="500000">€ 500,000</option>
                <option value="550000">€ 550,000</option>
                <option value="600000">€ 600,000</option>
                <option value="650000">€ 650,000</option>
                <option value="700000">€ 700,000</option>
                <option value="750000">€ 750,000</option>
                <option value="800000">€ 800,000</option>
                <option value="850000">€ 850,000</option>
                <option value="900000">€ 900,000</option>
                <option value="950000">€ 950,000</option>
                <option value="1000000">€ 1,000,000</option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 text-center">
            <button name="submit" type="submit" class="btn btn-primary btn-rounded">
              Cerca <i class="m-l10 fas fa-caret-right"></i>
            </button>
          </div>
        </div>
      </form>
    </section>

    <div class="content-inner">
      <div class="container">
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        <div v-else class="row">
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
            <template v-if="item.PriceReduced && item.PriceReduced > 0">
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
                <span v-if="item.Sold" class="badge ms-2" style="background-color: #3d6871; color: white;">Affittato</span>
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
      </div>
      <BlogPagination v-if="!loading" :currentPage="page" :totalPages="totalPages" :filter="filter" :typologie="typologie"
      :location="location" :code="code" :from="from" :to="to" :agencyId="agencyId" @changePage="handlePageChange" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr3 from '@/assets/images/banner/bnr3.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import BlogPagination from '@/elements/BlogPagination.vue'
import axios from 'axios'
import { cityLocations } from '@/data/locations'

export default defineComponent({
  name: 'sale-list',
  components: { CommonBanner, Swiper, SwiperSlide, BlogPagination },
  setup() {
    const locationOptions = computed(() => {
      const options = []
      
      // Add main cities
      Object.keys(cityLocations).forEach(city => {
        options.push({ value: city, label: city })
        
        // Add sub-locations for each city
        cityLocations[city].forEach(location => {
          options.push({ 
            value: location.Name, 
            label: `${city} - ${location.Name}` 
          })
        })
      })
      
      return options
    })

    return {
      bnr3,
      modules: [Navigation, Autoplay],
      locationOptions
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
        RequestType: "Affitto",
        PropertyType: "Qualsiasi",
        Location: null,
        Code: null,
        From: 0,
        To: -1,
        agencyId: this.agencyId,
        Sold:true,
        Negotiation:true
      },
      results: [{
        Id: 0,
        AddressLine: "",
        Typology: "",
        Price: 0,
        ShortDescription: "",
        TypeOfProperty: "",
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
      const result = await axios.get(
        `https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/GetMain?currentPage=${_page}&filterRequest=${_filter}&status=Affitto&typologie=${_typologie}&location=${_location}&code=${_code}&from=${_from}&to=${_to}&agencyId=${_agencyId ?? ""}`
      );
      this.results = result.data.Data;
      const totalItems = result.data.Total;
      this.totalPages = totalItems > 0 ? Math.ceil(totalItems / 10) : 1;
      this.loading = false;
    },
    async handlePageChange(newPage) {
      this.page = newPage;
      await this.getItems(this.page, this.filter, this.typologie, this.location, this.code, this.from, this.to, this.agencyId);
    },
async submit() {
  this.loading = true;
  this.typologie = this.formData.PropertyType;
  this.location = this.formData.Location ?? "Qualsiasi";
  this.code = this.formData.Code ?? 0;
  this.from = this.formData.From;
  this.to = this.formData.To;

  try {
    if (this.formData.RequestType === "Affitto") {
      await this.getItems(1, "", this.typologie, this.location, this.code, this.from, this.to, this.agencyId);
    } else {
      let routeName;
      if (this.formData.RequestType === "Vendita") {
        routeName = "immobili_in_affitto";
      } else if (this.formData.RequestType === "Aste") {
        routeName = "aste_immobiliari";
      }

      await this.$router.push({
        name: routeName,
        params: { 
          tipologia: this.typologie, 
          localita: this.location, 
          codice: this.code, 
          da: this.from, 
          a: this.to, 
          agencyId: this.agencyId 
        }
      });
      
      // Aspetta che la nuova pagina sia pronta
      if (this.$route.name === routeName) {
        this.$nextTick(() => {
          // Eventualmente triggerare il caricamente dati qui
        });
      }
    }
  } catch (error) {
    console.error("Submit error:", error);
  } finally {
    this.loading = false;
  }
}
  }
})
</script>

<style scoped>
.dz-info {
  width: 590px;
  /* Larghezza fissa, puoi modificarla */
  height: 450px;
  /* Altezza fissa, puoi modificarla */
  display: flex;
  /* Per allineare il contenuto */
  justify-content: space-between;
  /* Spazia gli elementi uniformemente */
  box-sizing: border-box;
  /* Include il padding nella dimensione totale */
  border-radius: 5px;
  /* Angoli arrotondati */
  background-color: #f9f9f9;
  /* Colore di sfondo */
}

@media (max-width: 768px) {
  .dz-info {
    width: 100%;
    /* Adatta alla larghezza del contenitore genitore */
    height: auto;
    /* Altezza flessibile per contenuti variabili */
    padding: 15px;
    /* Riduce il padding per schermi più piccoli */
  }
}
</style>
