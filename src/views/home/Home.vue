<template>
  <div class="page-content bg-white">
    <MainBanner />

    <section class="content-inner-3 bg-white line-img">
      <form class="container" @submit.prevent="submit()">
        <div class="contact-area aos-item mt-0">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">Trova il tuo immobile</h6>
          </div>
          <div class="row align-items-center about-bx3 mb-3">
            <div class="col-lg-4 mb-3">
              <select  class="form-control" v-model="formData.PropertyType">
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
                <option value="Non Edificabile">Non Edificabile</option>
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
                <input type="number" class="form-control" placeholder="Cod. Immobile" v-model="formData.Code"/>
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

    <section class="content-inner-3 bg-white line-img">
      <div class="container">
        <div class="row text-center section-head style-2">
          <div class="col-lg-12 aos-item aos-init aos-animate">
            <h5 class="text-primary sub-title">IN EVIDENZA</h5>
            <h2 class="title">I nostri immobili Online in questo momento {{ propertyCount }}</h2>
          </div>
        </div>
        <div v-if="!loading" class="row align-items-center about-bx4 mb-5">
          <div class="col-lg-6 m-b30">
            <div class="dz-media">
              <img :src="results.RealEstatePropertiesHighlighted.Photos[0].Url" alt=""
                style=" border-radius: 5px;" class="img1 aos-item aos-init aos-animate" />
              <!-- <img
                src="@/assets/images/about/pic7.jpg"
                alt=""
                class="img2 aos-item aos-init aos-animate"
              /> -->
            </div>
          </div>
          <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
            <div class="section-head style-2">
              <p>Cod. 00{{ results.RealEstatePropertiesHighlighted.Id }}</p>
              <h1 class="sub-title text-primary"> € {{ results.RealEstatePropertiesHighlighted.Price.toString()
               .replace(/\B(?=(\d{3})+(?!\d))/g, ".")+ ",00"}}</h1>
              <h3> {{ results.RealEstatePropertiesHighlighted.Town }}</h3>
              <h3><i class="fa fa-map-pin"></i> {{ results.RealEstatePropertiesHighlighted.AddressLine }}</h3>
              <h6> {{ results.RealEstatePropertiesHighlighted.TypeOfProperty }}</h6>
              <h6><img src="@/assets/images/energy.png" /> {{ results.RealEstatePropertiesHighlighted.EnergyClass }}
              </h6>
              <p>
                {{ results.RealEstatePropertiesHighlighted.Description.substring(0, 300) }}...
              </p>
            </div>
            <RouterLink v-if="results.RealEstatePropertiesHighlighted.Id && results.RealEstatePropertiesHighlighted.Id > 0" :to="{ name: 'dettaglio', params: { id: results.RealEstatePropertiesHighlighted.Id } }"
              class="btn btn-primary btn-rounded hover-icon">
              <span>Più dettagli</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
        <Home3Blog v-if="!loading" :items="results.RealEstatePropertiesInHome" />
        <div class="row align-items-center style-2 mt-5">
          <div class="col-lg-12 aos-item aos-init aos-animate text-center d-none d-lg-block">
            <RouterLink to="/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1" class="btn btn-primary btn-rounded hover-icon">
              <span>Tutti gli immobili</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <MainBanner3 />
    <section class="content-inner-3 service-area">
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
    <section class="content-inner-2 service-area">
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
import { defineComponent, watchEffect } from 'vue'
import ClientLogo from '@/elements/ClientLogo.vue'
import Home3Blog from '@/components/Home3Blog.vue'
import logoWhite from '@/assets/images/TH-6.jpg'
import logo from '@/assets/images/TH-4.jpg'
import { RouterLink } from 'vue-router'
import backgrouBg2 from '@/assets/images/background/bg2.png'
import { apiService } from '@/services/apiService'
import { useLocations } from '@/composables/useLocations'


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

    const { locationOptions, loadLocations, parseLocation } = useLocations()

    return { backgrouBg2, locationOptions, loadLocations, parseLocation }
  },
  components: {
    MainBanner,
    MainBanner3,
    Home3Services,
    Home3About,
    Home3Accordian,
    ClientLogo,
    Home3Blog,
    RouterLink,
  },
  async mounted() {
    await this.loadLocations();
    await this.getItems();
    this.getCount();
  },
  data() {
    return {
      loading: true,
      formData: {
        RequestType: "Vendita",
        PropertyType: "Qualsiasi",
        Location: null,
        Code: null,
        From: 0,
        To: -1,
      },
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
    async submit() {
      this.loading = true;
      
      // Parsifica la località selezionata
      const { city, location } = this.parseLocation(this.formData.Location)
            
      let routeName;
      if (this.formData.RequestType === 'Affitto') {routeName = 'immobili_in_affitto';
      } else if (this.formData.RequestType === 'Vendita') {routeName = 'immobili_in_vendita';
      } else if (this.formData.RequestType === 'Aste') {routeName = 'aste_immobiliari';
      }      
      this.$router.push({
        name: routeName, params: {
          tipologia: this.formData.PropertyType, 
          localita: location || "Qualsiasi", 
          da: this.formData.From,
          codice: this.formData.Code ?? 0, 
          a: this.formData.To,
          city: city || ""
        },
      })

      this.loading = false;
    }
  }
})

</script>

<style>
@media (max-width: 991px) {
  .content-inner-3 .row {
    flex-direction: column;
  }

  .content-inner-3 .col-3 {
    width: 100% !important;
    margin-bottom: 10px;
  }

  .content-inner-3 select,
  .content-inner-3 input[type="number"] {
    width: 100%;
  }

  .content-inner-3 button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
  .col-sm-12 {
    width: 35%;
    padding: 10px;
    font-size: 12px;
  }

  }

@media (max-width: 768px) {
  .content-inner-3 .row {
    flex-direction: column;
  }

  .content-inner-3 .col-3 {
    width: 100% !important;
    margin-bottom: 10px;
  }

  .content-inner-3 select,
  .content-inner-3 input[type="number"] {
    width: 100%;
  }

  .content-inner-3 button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
}
@media (max-width: 991px) { 
  .d-lg-block {
    display: block !important; /* Mostra l'elemento per schermi piccoli */
  }

  .aos-item.text-center {
    text-align: center;
    margin-top: 20px; /* Spazio aggiuntivo per separare */
  }

  .btn.btn-secondary.btn-rounded.hover-icon {
    display: inline-block;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 30px; /* Stile arrotondato */
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
  }

  .btn.btn-secondary.btn-rounded.hover-icon i {
    margin-left: 10px; /* Spazio tra l'icona e il testo */
  }

  .btn.btn-secondary.btn-rounded.hover-icon:hover {
    background-color: #555; /* Cambia colore al passaggio */
    color: #fff; /* Testo in bianco */
  }
}


</style>
