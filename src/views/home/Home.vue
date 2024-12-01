<template>
  <div class="page-content bg-white">
    <MainBanner />
    <MainBanner3 />
    <section class="content-inner-3 bg-white line-img">
      <div class="container">
        <div class="row text-center section-head style-2">
          <div class="col-lg-12 aos-item aos-init aos-animate">
            <h5 class="text-primary sub-title">IN EVIDENZA</h5>
            <h2 class="title">I nostri immobili</h2>
          </div>
        </div>
        <div v-if="!loading" class="row align-items-center about-bx4 mb-5">
          <div class="col-lg-6 m-b30">
            <div class="dz-media">
              <img
                :src="results.RealEstatePropertiesHighlighted.Photos.$values[0].Url"
                alt=""
                class="img1 aos-item aos-init aos-animate"
              />
              <!-- <img
                src="@/assets/images/about/pic7.jpg"
                alt=""
                class="img2 aos-item aos-init aos-animate"
              /> -->
            </div>
          </div>
          <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
            <div class="section-head style-2">
              <h2 class="title m-b10"> {{results.RealEstatePropertiesHighlighted.AddressLine}}</h2>
              <h5 class="sub-title text-primary"> € {{results.RealEstatePropertiesHighlighted.Price}}</h5>
              <p>
                {{results.RealEstatePropertiesHighlighted.Description}}
              </p>
            </div>
            <RouterLink :to="{name: 'dettaglio', params: {id: results.RealEstatePropertiesHighlighted.Id}}" class="btn btn-primary btn-rounded hover-icon">
              <span>Più dettagli</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
        <Home3Blog v-if="!loading"  :items="results.RealEstatePropertiesInHome" />
        <div class="row align-items-center style-2 mt-5">
          <div class="col-lg-12 aos-item aos-init aos-animate text-center d-none d-lg-block">
            <RouterLink to="/blog-details" class="btn btn-secondary btn-rounded hover-icon">
              <span>Tutti gli immobili</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
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
    <!-- <section class="content-inner-3">
      <div class="container">
        <div class="row align-items-center about-bx4">
          <div class="col-lg-6 m-b30">
            <div class="dz-media">
              <img
                src="@/assets/images/about/pic12.jpg"
                alt=""
                class="img1 aos-item aos-init aos-animate"
              />
              <img
                src="@/assets/images/about/Pic11.jpg"
                alt=""
                class="img2 aos-item aos-init aos-animate"
              />
            </div>
          </div>
          <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
            <div class="section-head style-2">
              <h6 class="sub-title text-primary">About Us</h6>
              <h2 class="title m-b20">Progettazione e ristrutturazioni</h2>
              <p>
                Affidati ai nostri professionisti per la progettazione e ristrutturazione di case, ville, uffici, negozi, ma anche impianti, edifici industriali, alberghi, strutture sanitarie e supermercati. Da oltre 40 anni operiamo in vari settori grazie un team completo: architetti, ingegneri, geometri ed altri esperti in materia di edilizia.
              </p>
            </div>
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
              <span>READ MORE</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section class="content-inner-2">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h6 class="sub-title text-primary">About Services</h6>
          <h2 class="title">Coworking Space</h2>
        </div>
        <Home3About />
      </div>
    </section> -->
    <Home3Accordian />
    <!-- <Modalvideo2 /> -->
    
    <!-- <section class="content-inner-1 overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 align-self-center px-3 mb-lg-0 mb-4">
            <div class="section-head style-2">
              <h6 class="sub-title text-primary">Team</h6>
              <h2 class="title">Meet Our Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority
                don't look even slightly believable.
              </p>
            </div>
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
              <span>View All Members</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
          <Home3OurTeam />
        </div>
      </div>
    </section> -->
    <!-- <section class="content-inner-1 bg-gray over">
      <div class="container">
        <div class="section-head style-2 text-center">
          <h6 class="sub-title text-primary">Testimonial</h6>
          <h2 class="title">What The People Thinks About Us</h2>
        </div>
        <Home3Testimonial />
      </div>
    </section> -->
    <!-- <section class="content-inner bg-white line-img">
      <div class="container">
        <div class="row align-items-center section-head style-2">
          <div class="col-lg-8 aos-item aos-init aos-animate">
            <h5 class="text-primary sub-title">Blog Details</h5>
            <h2 class="title">Read Our Latest Blog & News</h2>
          </div>
          <div class="col-lg-4 aos-item aos-init aos-animate text-end d-none d-lg-block">
            <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
              <span>View All Post</span>
              <i class="fas fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
        <Home3Blog />
      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
import Home3About from '@/components/Home3About.vue'
import Home3Services from '@/components/Home3Services.vue'
import Testimonial2 from '@/components/Testimonial2.vue'
import MainBanner from '@/components/MainBanner.vue'
import MainBanner3 from '@/components/MainBanner3.vue'
import Home3Accordian from '@/components/Home3Accordian.vue'
import { defineComponent, watchEffect } from 'vue'
import Modalvideo2 from '@/elements/Modalvideo2.vue'
import ClientLogo from '@/elements/ClientLogo.vue'
import Home3OurTeam from '@/components/Home3OurTeam.vue'
import Home3Testimonial from '@/components/Home3Testimonial.vue'
import Home3Blog from '@/components/Home3Blog.vue'
import logoWhite from '@/assets/images/TH-6.jpg'
import logo from '@/assets/images/TH-4.jpg'
import { RouterLink } from 'vue-router'
import backgrouBg2 from '@/assets/images/background/bg2.png'
import axios from 'axios'


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
    return {backgrouBg2}
  },
  components: {
    MainBanner,
    MainBanner3,
    Home3Services,
    Home3About,
    Home3Accordian,
    Modalvideo2,
    ClientLogo,
    Home3OurTeam,
    Home3Testimonial,
    Home3Blog,
    RouterLink,
    Testimonial2
  },
  async mounted(){
    await this.getItems();
  },
  data() {
    return {
      loading: true,
      results: {
        RealEstatePropertiesHighlighted: {
          Id: 0,
          AddressLine: "",
          Price: 0,
          Description: "",
          Photos: {
            $values: [{
              Url: ""
            }]
          }
          },
        RealEstatePropertiesInHome: {
          Id: 0,
          AddressLine: "",
          Price: 0,
          Description: "",
          Photos: [{
            $values: [{
              Url: ""
            }]
          }]}
      }
    }
  },
  methods: {
    async getItems(){
      const result = await axios.get("https://localhost:7267/api/Generic/GetHomeDetails");
      this.results.RealEstatePropertiesInHome = result.data.RealEstatePropertiesInHome.$values;
      this.results.RealEstatePropertiesHighlighted = result.data.RealEstatePropertiesHighlighted;
      console.log(this.results.RealEstatePropertiesInHome)
      this.loading = false;
    }
  }
})
</script>

<style scoped></style>
