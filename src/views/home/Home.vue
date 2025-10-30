<template>
  <div class="page-content bg-white">
    <MainBanner />

    <PropertySearchForm 
      @submit="handleSearchSubmit"
    />

    <section class="home-highlight-section">
      <div class="container home-highlight-container">
        <div class="row text-center section-head style-2">
          <div class="col-lg-12 aos-item aos-init aos-animate">
            <h5 class="home-section-subtitle">IN EVIDENZA</h5>
            <h2 class="home-section-title">I nostri immobili Online in questo momento {{ propertyCount }}</h2>
          </div>
        </div>
        <div v-if="!loading" class="home-highlight-card">
          <div class="row align-items-center">
          <div class="col-lg-6 m-b30">
            <div class="dz-media">
                <img 
                  :src="results.RealEstatePropertiesHighlighted.Photos[0].Url" 
                alt=""
                  class="home-highlight-image aos-item aos-init aos-animate" 
                />
              </div>
            </div>
            <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
              <div class="home-highlight-content">
                <p class="home-highlight-code">Cod. 00{{ results.RealEstatePropertiesHighlighted.Id }}</p>
                <h1 class="home-highlight-price">
                  € {{ results.RealEstatePropertiesHighlighted.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00
                </h1>
                <h3 class="home-highlight-title">{{ results.RealEstatePropertiesHighlighted.Town }}</h3>
                <h3 class="home-highlight-address">
                  <i class="fa fa-map-pin"></i> {{ results.RealEstatePropertiesHighlighted.AddressLine }}
                </h3>
                <div class="home-highlight-details">
                  <span class="home-highlight-detail">
                    {{ results.RealEstatePropertiesHighlighted.TypeOfProperty }}
                  </span>
                  <span class="home-highlight-detail">
                    <img src="@/assets/images/energy.png" /> {{ results.RealEstatePropertiesHighlighted.EnergyClass }}
                  </span>
          </div>
                <p class="home-highlight-description">
                {{ results.RealEstatePropertiesHighlighted.Description.substring(0, 300) }}...
              </p>
                <RouterLink 
                  v-if="results.RealEstatePropertiesHighlighted.Id && results.RealEstatePropertiesHighlighted.Id > 0" 
                  :to="{ name: 'dettaglio', params: { id: results.RealEstatePropertiesHighlighted.Id } }"
                  class="btn btn-primary btn-rounded hover-icon"
                >
              <span>Più dettagli</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <Home3Blog v-if="!loading" :items="results.RealEstatePropertiesInHome" />
        <div class="home-all-properties-btn">
          <RouterLink 
            to="/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1" 
            class="btn btn-primary btn-rounded hover-icon btn-view-all"
          >
              <span>Tutti gli immobili</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
        </div>
      </div>
    </section>
    <MainBanner3 />
    <section class="content-inner-3 service-area home-partners-wrapper">
      <div class="container">
        <div class="row text-center section-head style-2">
          <div class="col-lg-12 aos-item aos-init aos-animate">
            <h5 class="text-primary sub-title">Partner ufficiali</h5>
            <h2 class="title">I nostri partner</h2>
          </div>
        </div>
        <ClientLogo />
      </div>
    </section>
    <section class="content-inner-2 service-area home-services-wrapper">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h6 class="sub-title text-primary"><img src="@/assets/images/banner/bnr12Home.jpg" /></h6>
          <h2 class="title">
            Servizi e consulenze
          </h2>
        </div>
        <Home3Services />
      </div>
    </section>
    <Home3Accordian />
  </div>
</template>

<script lang="js">
import Home3About from '@/components/Home3About.vue'
import Home3Services from '@/components/Home3Services.vue'
import MainBanner from '@/components/MainBanner.vue'
import MainBanner3 from '@/components/MainBanner3.vue'
import Home3Accordian from '@/components/Home3Accordian.vue'
import PropertySearchForm from '@/components/PropertySearchForm.vue'
import { defineComponent, watchEffect } from 'vue'
import ClientLogo from '@/elements/ClientLogo.vue'
import Home3Blog from '@/components/Home3Blog.vue'
import logoWhite from '@/assets/images/TH-6.jpg'
import logo from '@/assets/images/TH-4.jpg'
import { RouterLink } from 'vue-router'
import backgrouBg2 from '@/assets/images/background/bg2.png'
import { apiService } from '@/services/apiService'


export default defineComponent({
  name: 'home',
  setup() {
    watchEffect(() => {
      setTimeout(() => {
        document.querySelectorAll('.header_logo').forEach((el) => {
          el.setAttribute('src', logo)
        })
        document.querySelectorAll('.header_logo2').forEach((el) => {
          el.setAttribute('src', logoWhite)
        })
        document.body.setAttribute('data-color', 'color_3')
      }, 10)
    })

    return { backgrouBg2 }
  },
  components: {
    MainBanner,
    MainBanner3,
    Home3Services,
    Home3About,
    Home3Accordian,
    PropertySearchForm,
    ClientLogo,
    Home3Blog,
    RouterLink,
  },
  async mounted() {
    await this.getItems();
    this.getCount();
  },
  data() {
    return {
      loading: true,
      propertyCount: null,
      results: {
        RealEstatePropertiesHighlighted: {
          Id: 0,
          ShortTitle: "",
          ShortDescription: "",
          AddressLine: "",
          Price: 0,
          Description: "",
          Typology: "",
          TypeOfProperty:"",
          EnergyClass: "",
          Town: "",
          Photos: [{
              Url: ""
          }]
        },
        RealEstatePropertiesInHome: {
          Id: 0,
          AddressLine: "",
          Price: 0,
          Description: "",
          Photos: [{
              Url: ""
          }]
        }
      }
    }
  },
  methods: {
    async getItems() {
      const result = await apiService.getHomeDetails();
      this.results.RealEstatePropertiesInHome = result.RealEstatePropertiesInHome;
      this.results.RealEstatePropertiesHighlighted = result.RealEstatePropertiesHighlighted;
      this.loading = false;
    },
    async getCount() {
      const result = await apiService.getPropertyCount();
      this.propertyCount = result;
      this.loading = false;
    },
    handleSearchSubmit(formData) {
      this.loading = true;
      
      // Parsifica la località selezionata
      const { city, location } = formData.parseLocation(formData.Location)
            
      let routeName;
      if (formData.RequestType === 'Affitto') {
        routeName = 'immobili_in_affitto';
      } else if (formData.RequestType === 'Vendita') {
        routeName = 'immobili_in_vendita';
      } else if (formData.RequestType === 'Aste') {
        routeName = 'aste_immobiliari';
      }
      
      this.$router.push({
        name: routeName, 
        params: {
          tipologia: formData.PropertyType, 
          localita: location || "Qualsiasi", 
          da: formData.From,
          codice: formData.Code ?? 0, 
          a: formData.To,
          city: city || ""
        },
      })

      this.loading = false;
    }
  }
})

</script>

<style>
/* Home page specific styles */
.page-content {
  overflow-x: hidden;
}

@media (max-width: 991px) { 
  .home-all-properties-btn {
    margin-top: 30px;
  }
}
</style>
