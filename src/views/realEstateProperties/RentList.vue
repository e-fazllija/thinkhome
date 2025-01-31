<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Immobili in affitto" text="Immobili in affitto" />
    
    <section class="content-inner-3 bg-white line-img">
      <form class="container" @submit.prevent="submit()">
        <div class="contact-area aos-item mt-0">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-primary">Trova il tuo immobile</h6>
          </div>
          <div class="row align-items-center about-bx3 mb-3">
            <div class="col-lg-4 mb-3">
              <select class="form-control" v-model="formData.PropertyType">
                <option value="Qualsiasi">Qualsiasi</option>
                <option value="Appartamento">Appartamento</option>
                <option value="Attico">Attico</option>
                <option value="Mansarda">Mansarda</option>
                <option value="Loft">Loft</option>
                <option value="Soffitta">Soffitta</option>
                <option value="Casale">Casale</option>
                <option value="Rustico">Rustico</option>
                <option value="Box singolo">Box singolo</option>
                <option value="Box doppio">Box doppio</option>
                <option value="Posto auto">Posto auto</option>
                <option value="Villa Unifamiliare">Villa Unifamiliare</option>
                <option value="Villa Bifamiliare">Villa Bifamiliare</option>
                <option value="Villa Plurifamiliare">Villa Plurifamiliare</option>
                <option value="Villa a Schiera">Villa a Schiera</option>
              </select>
            </div>
            <div class="col-lg-4 mb-3">
              <select class="form-control" v-model="formData.RequestType">
                <option value="Vendita">Vendita</option>
                <option value="Affitto">Affitto</option>
              </select>
            </div>
            <div class="col-lg-4 mb-3">
              <input type="text" class="form-control" placeholder="Località" v-model="formData.Location" />
              <!-- <select class="form-control" v-model="formData.Location">
                <option value="Qualsiasi">Località</option>
                <option value="Qualsiasi">Qualsiasi</option>
                <option value="R4">ABRUZZO</option>
                <option value="R1">LAZIO</option>
                <option value="P7">ABRUZZO \ L'AQUILA (AQ)</option>
                <option value="P2">LAZIO \ FROSINONE (FR)</option>
                <option value="P4">LAZIO \ LATINA (LT)</option>
                <option value="P1">LAZIO \ ROMA (RM)</option>
                <option value="C56">ABRUZZO \ L'AQUILA (AQ) \ TAGLIACOZZO</option>
                <option value="C24">LAZIO \ FROSINONE (FR) \ FIUGGI</option>
                <option value="C107">LAZIO \ FROSINONE (FR) \ FROSINONE</option>
                <option value="C27">LAZIO \ FROSINONE (FR) \ PALIANO</option>
                <option value="C74">LAZIO \ FROSINONE (FR) \ SERRONE</option>
                <option value="C32">LAZIO \ LATINA (LT) \ APRILIA</option>
                <option value="C68">LAZIO \ LATINA (LT) \ CORI</option>
                <option value="C69">LAZIO \ LATINA (LT) \ ROCCA MASSIMA</option>
                <option value="C63">LAZIO \ LATINA (LT) \ SABAUDIA</option>
                <option value="C54">LAZIO \ LATINA (LT) \ SAN FELICE CIRCEO</option>
                <option value="C33">LAZIO \ ROMA (RM) \ ALBANO LAZIALE</option>
                <option value="C22">LAZIO \ ROMA (RM) \ ANZIO</option>
                <option value="C62">LAZIO \ ROMA (RM) \ ARDEA</option>
                <option value="C25">LAZIO \ ROMA (RM) \ ARTENA</option>
                <option value="C122">LAZIO \ ROMA (RM) \ BELLEGRA</option>
                <option value="C72">LAZIO \ ROMA (RM) \ CASAPE</option>
                <option value="C117">LAZIO \ ROMA (RM) \ CASTEL SAN PIETRO ROMANO</option>
                <option value="C12">LAZIO \ ROMA (RM) \ CAVE</option>
                <option value="C29">LAZIO \ ROMA (RM) \ COLLEFERRO</option>
                <option value="C8">LAZIO \ ROMA (RM) \ COLONNA</option>
                <option value="C125">LAZIO \ ROMA (RM) \ FIANO ROMANO</option>
                <option value="C34">LAZIO \ ROMA (RM) \ FIUMICINO</option>
                <option value="C15">LAZIO \ ROMA (RM) \ FRASCATI</option>
                <option value="C10">LAZIO \ ROMA (RM) \ GALLICANO NEL LAZIO</option>
                <option value="C120">LAZIO \ ROMA (RM) \ GAVIGNANO</option>
                <option value="C36">LAZIO \ ROMA (RM) \ GENAZZANO</option>
                <option value="C21">LAZIO \ ROMA (RM) \ GROTTAFERRATA</option>
                <option value="C2">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO</option>
                <option value="C7">LAZIO \ ROMA (RM) \ LABICO</option>
                <option value="C90">LAZIO \ ROMA (RM) \ LANUVIO</option>
                <option value="C37">LAZIO \ ROMA (RM) \ LARIANO</option>
                <option value="C30">LAZIO \ ROMA (RM) \ MARINO</option>
                <option value="C13">LAZIO \ ROMA (RM) \ MONTECOMPATRI</option>
                <option value="C51">LAZIO \ ROMA (RM) \ MONTELANICO</option>
                <option value="C48">LAZIO \ ROMA (RM) \ NETTUNO</option>
                <option value="C81">LAZIO \ ROMA (RM) \ OLEVANO ROMANO</option>
                <option value="C11">LAZIO \ ROMA (RM) \ PALESTRINA</option>
                <option value="C23">LAZIO \ ROMA (RM) \ POLI</option>
                <option value="C85">LAZIO \ ROMA (RM) \ POMEZIA</option>
                <option value="C46">LAZIO \ ROMA (RM) \ RIANO</option>
                <option value="C80">LAZIO \ ROMA (RM) \ ROCCA DI CAVE</option>
                <option value="C14">LAZIO \ ROMA (RM) \ ROCCA PRIORA</option>
                <option value="C1">LAZIO \ ROMA (RM) \ ROMA</option>
                <option value="C5">LAZIO \ ROMA (RM) \ SAN CESAREO</option>
                <option value="C28">LAZIO \ ROMA (RM) \ SAN VITO ROMANO</option>
                <option value="C95">LAZIO \ ROMA (RM) \ SUBIACO</option>
                <option value="C17">LAZIO \ ROMA (RM) \ TIVOLI</option>
                <option value="C9">LAZIO \ ROMA (RM) \ VALMONTONE</option>
                <option value="C42">LAZIO \ ROMA (RM) \ VELLETRI</option>
                <option value="C6">LAZIO \ ROMA (RM) \ ZAGAROLO</option>
              </select> -->
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
        <div class="row justify-content-center">
          <div v-if="loading" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
          <div v-if="!loading" class="col-xl-6 col-lg-6">
            <div v-for="(item, ind) in results" :key="ind" class="dz-card blog-grid style-1 m-b50 aos-item">
              <div class="dz-media">
                <Swiper class="swiper-container post-swiper" 
                :speed="1500" 
                :loop="true" 
                :modules="modules" 
                :navigation="{
                  prevEl: '.prev-post-swiper-btn',
                  nextEl: '.next-post-swiper-btn'
                }">
                  <SwiperSlide v-for="(photo, ind) in item.Photos" :key="ind" class="swiper-slide">
                    <RouterLink :to="{name: 'dettaglio', params: {id: item.Id}}"><img :src="photo.Url" alt="" 
                      style="border-radius: 5px; padding: 0px; height: 400px; object-fit: cover;"
                      /></RouterLink>
                  </SwiperSlide>
                  <div class="prev-post-swiper-btn"><i class="la fa-angle-left"></i></div>
                  <div class="next-post-swiper-btn"><i class="la fa-angle-right"></i></div>
                </Swiper>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <h1>€ {{item.Price.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}}</h1>
                    <li>Cod. 00{{item.Id}}</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                 {{ item.AddressLine }}
                </h3>
                <div class="dz-post-text text">
                  <p>
                    {{ item.Description.substring(0, 300) }}...
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink :to="{name: 'dettaglio', params: {id: item.Id}}" class="btn btn-primary btn-rounded btn-sm hover-icon"><span>Dettaglio </span><i
                      class="fas fa-arrow-right"></i></RouterLink>
                </div>
              </div>
            </div>
            <BlogPagination 
            :currentPage="page" 
            :totalPages="totalPages" 
            :filter="filter" 
            :typologie="typologie"
            :location="location"
            :code="code"
            :from="from"
            :to="to"
             @changePage="getItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr3 from '@/assets/images/banner/bnr3.jpg'
import BlogLeftContent from '@/components/BlogLeftContent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import BlogPagination from '@/elements/BlogPagination.vue'
import axios from 'axios'

export default defineComponent({
  name: 'blog_list_sidebar',
  components: { CommonBanner, BlogLeftContent, Swiper, SwiperSlide, BlogPagination },

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
      },
      results: [{
        Id: 0,
        AddressLine: "",
        Price: 0,
        ShortDescription: "",
        Photos: [{
            Url: ""
        }]
      }]
    }
  },
  async beforeMount() {
    await this.getItems(1, "", this.typologie, this.location, this.code, this.from, this.to);
  },
  methods: {
    async getItems(_page, _filter, _typologie, _location, _code, _from, _to) {
      this.loading = true;
      const result = 
      await axios.get
      (`https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/Get?currentPage=${_page}&filterRequest=${_filter}&status=Affitto&typologie=${_typologie}&location=${_location}&code=${_code}&from=${_from}&to=${_to}`);
      this.results = result.data.Data;
      this.page = _page;
      this.totalPages = 1;
      if (result.data.Total > 10) {
        this.totalPages = Math.ceil(result.data.Total / 10);
      }
      this.loading = false;
    },
    async submit() {
      this.loading = true;
      await this.getItems(1, "", this.formData.PropertyType, this.formData.Location ?? "Qualsiasi", this.formData.Code ?? 0, this.formData.From, this.formData.To)
      this.loading = false;
    }
  }
})
</script>

<style scoped></style>
