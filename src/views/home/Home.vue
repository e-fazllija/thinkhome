<template>
  <div class="page-content bg-white">
    <MainBanner />

    <section class="content-inner-3 bg-white line-img">
      <div class="container">
        <div class="row align-items-center about-bx3 mb-3">

          <div class="col-3 mb-3" style="width: 20%;">
              <select name="Tipologia" style="padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; flex: 1;">
               <option value="">Tipologia</option>
               <option value="selected" >Qualsiasi</option>
               <option value="1">Appartamenti</option>
               <option value="11">Attività Commerciale</option>
               <option value="10">Box</option>
               <option value="9">Capannoni, Loc. Artigianali</option>
               <option value="5">Casali e Ruderi</option>
               <option value="3">Case Semindipendenti</option>
               <option value="8">Locali Commerciali</option>
               <option value="4">Nuove Costruzioni</option>
               <option value="6">Terreni</option>
               <option value="2">Ville e Case Indipendenti</option>
              </select>
          </div>

          <div class="col-3 mb-3" style="width: 14%;">
             <select name="Vendita\Affitto" style="padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; flex: 1;">
           <option value="">Vendita\Affitto</option>
           <option value="1">Vendita</option>
           <option value="2">Affitto</option>
             </select>
            </div>

          <div class="col-3 mb-3" style="width: 20%;">
             <select name="Località" style="padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; flex: 1;">
             <option value="">Località</option>
             <option value="" data-select2-id="6">Qualsiasi</option>
	           <option value="R4" data-select2-id="14">ABRUZZO</option>
	           <option value="R1" data-select2-id="15">LAZIO</option>
	           <option value="P7" data-select2-id="16">ABRUZZO \ L'AQUILA (AQ)</option>
	           <option value="P2" data-select2-id="17">LAZIO \ FROSINONE (FR)</option>
		         <option value="P4" data-select2-id="18">LAZIO \ LATINA (LT)</option>
		         <option value="P1" data-select2-id="19">LAZIO \ ROMA (RM)</option>
		         <option value="C56" data-select2-id="20">ABRUZZO \ L'AQUILA (AQ) \ TAGLIACOZZO</option>
		         <option value="C24" data-select2-id="21">LAZIO \ FROSINONE (FR) \ FIUGGI</option>
		         <option value="C107" data-select2-id="22">LAZIO \ FROSINONE (FR) \ FROSINONE</option>
		         <option value="C27" data-select2-id="23">LAZIO \ FROSINONE (FR) \ PALIANO</option>
		         <option value="C74" data-select2-id="24">LAZIO \ FROSINONE (FR) \ SERRONE</option>
		         <option value="C32" data-select2-id="25">LAZIO \ LATINA (LT) \ APRILIA</option>
		         <option value="C68" data-select2-id="26">LAZIO \ LATINA (LT) \ CORI</option>
		         <option value="C69" data-select2-id="27">LAZIO \ LATINA (LT) \ ROCCA MASSIMA</option>
		         <option value="C63" data-select2-id="28">LAZIO \ LATINA (LT) \ SABAUDIA</option>
		         <option value="C54" data-select2-id="29">LAZIO \ LATINA (LT) \ SAN FELICE CIRCEO</option>
		         <option value="C33" data-select2-id="30">LAZIO \ ROMA (RM) \ ALBANO LAZIALE</option>
		         <option value="C22" data-select2-id="31">LAZIO \ ROMA (RM) \ ANZIO</option>
		         <option value="C62" data-select2-id="32">LAZIO \ ROMA (RM) \ ARDEA</option>
		         <option value="C25" data-select2-id="33">LAZIO \ ROMA (RM) \ ARTENA</option>
		         <option value="C122" data-select2-id="34">LAZIO \ ROMA (RM) \ BELLEGRA</option>
		         <option value="C72" data-select2-id="35">LAZIO \ ROMA (RM) \ CASAPE</option>
		         <option value="C117" data-select2-id="36">LAZIO \ ROMA (RM) \ CASTEL SAN PIETRO ROMANO</option>
		         <option value="C12" data-select2-id="37">LAZIO \ ROMA (RM) \ CAVE</option>
		         <option value="C29" data-select2-id="38">LAZIO \ ROMA (RM) \ COLLEFERRO</option>
		         <option value="C8" data-select2-id="39">LAZIO \ ROMA (RM) \ COLONNA</option>
		         <option value="C125" data-select2-id="40">LAZIO \ ROMA (RM) \ FIANO ROMANO</option>
		         <option value="C34" data-select2-id="41">LAZIO \ ROMA (RM) \ FIUMICINO</option>
		         <option value="C15" data-select2-id="42">LAZIO \ ROMA (RM) \ FRASCATI</option>
		         <option value="C10" data-select2-id="43">LAZIO \ ROMA (RM) \ GALLICANO NEL LAZIO</option>
		         <option value="C120" data-select2-id="44">LAZIO \ ROMA (RM) \ GAVIGNANO</option>
		         <option value="C36" data-select2-id="45">LAZIO \ ROMA (RM) \ GENAZZANO</option>
		         <option value="C21" data-select2-id="46">LAZIO \ ROMA (RM) \ GROTTAFERRATA</option>
		         <option value="C2" data-select2-id="47">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO</option>
		         <option value="C7" data-select2-id="48">LAZIO \ ROMA (RM) \ LABICO</option>
		         <option value="C90" data-select2-id="49">LAZIO \ ROMA (RM) \ LANUVIO</option>
		         <option value="C37" data-select2-id="50">LAZIO \ ROMA (RM) \ LARIANO</option>
		         <option value="C30" data-select2-id="51">LAZIO \ ROMA (RM) \ MARINO</option>
		         <option value="C13" data-select2-id="52">LAZIO \ ROMA (RM) \ MONTECOMPATRI</option>
		         <option value="C51" data-select2-id="53">LAZIO \ ROMA (RM) \ MONTELANICO</option>
		         <option value="C48" data-select2-id="54">LAZIO \ ROMA (RM) \ NETTUNO</option>
		         <option value="C81" data-select2-id="55">LAZIO \ ROMA (RM) \ OLEVANO ROMANO</option>
		         <option value="C11" data-select2-id="56">LAZIO \ ROMA (RM) \ PALESTRINA</option>
		         <option value="C23" data-select2-id="57">LAZIO \ ROMA (RM) \ POLI</option>
		         <option value="C85" data-select2-id="58">LAZIO \ ROMA (RM) \ POMEZIA</option>
		         <option value="C46" data-select2-id="59">LAZIO \ ROMA (RM) \ RIANO</option>
		         <option value="C80" data-select2-id="60">LAZIO \ ROMA (RM) \ ROCCA DI CAVE</option>
		         <option value="C14" data-select2-id="61">LAZIO \ ROMA (RM) \ ROCCA PRIORA</option>
		         <option value="C1" data-select2-id="62">LAZIO \ ROMA (RM) \ ROMA</option>
		         <option value="C5" data-select2-id="63">LAZIO \ ROMA (RM) \ SAN CESAREO</option>
		         <option value="C28" data-select2-id="64">LAZIO \ ROMA (RM) \ SAN VITO ROMANO</option>
		         <option value="C95" data-select2-id="65">LAZIO \ ROMA (RM) \ SUBIACO</option>
		         <option value="C17" data-select2-id="66">LAZIO \ ROMA (RM) \ TIVOLI</option>
		         <option value="C9" data-select2-id="67">LAZIO \ ROMA (RM) \ VALMONTONE</option>
		         <option value="C42" data-select2-id="68">LAZIO \ ROMA (RM) \ VELLETRI</option>
		         <option value="C6" data-select2-id="69">LAZIO \ ROMA (RM) \ ZAGAROLO</option>
             </select>
        </div>
      </div>
    </div>



        <div class="container">
          <div class="row align-items-center about-bx3 mb-4">

            <div class="col-3 mb-4" style="width: 20%;">
          <div>
                <input type="number" name="filter4" id="filter4" placeholder="Cod. Immobile"
                style="padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; " />
          </div>
        </div>

        <div class="col-3 mb-4" style="width: 14%;">
             <select name="Prezzo Minimo" style="padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; flex: 1;">
             <option value="">Prezzo Minimo</option>
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

            <div class="col-3 mb-4" style="width: 28%;">
            <select name="Prezzo Massimo" style="padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; flex: 1;">
            <option value="">Prezzo Minimo</option>
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


            <div class="col-3 mb-4" style="width: 25%;">
             <button type="submit" style="padding: 10px 30px; background-color: #c6a47e; color: white; border: none; border-radius: 5px; font-size: 18px; cursor: pointer;">
             Ricerca
             </button>
            </div>
        </div>
      </div>

    </section>

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
                style=" border-radius: 5px;"
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
              <p>Cod. 00{{results.RealEstatePropertiesHighlighted.Id}}</p>
              <h1 class="sub-title text-primary"> € {{results.RealEstatePropertiesHighlighted.Price}}</h1>
              <h3><i class="fa fa-map-pin"></i>  {{ results.RealEstatePropertiesHighlighted.Town }}({{  }}), {{ results.RealEstatePropertiesHighlighted.AddressLine }}</h3>
              <h6> {{ results.RealEstatePropertiesHighlighted.TypeOfProperty }}</h6>
                <h6 ><img src="@/assets/images/energy.png" />  {{ results.RealEstatePropertiesHighlighted.EnergyClass }}</h6>
                <p>
                {{results.RealEstatePropertiesHighlighted.ShortDescription}}
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
            <RouterLink to="/immobili-in-vendita" class="btn btn-secondary btn-rounded hover-icon">
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
          ShortTitle:"",
          ShortDescription:"",
          AddressLine: "",
          Price: 0,
          Description: "",
          TypeOfProperty:"",
          EnergyClass:"",
          Town:"",
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
      const result = await axios.get("https://thinkhomebe.azurewebsites.net/api/Generic/GetHomeDetails");
      this.results.RealEstatePropertiesInHome = result.data.RealEstatePropertiesInHome.$values;
      this.results.RealEstatePropertiesHighlighted = result.data.RealEstatePropertiesHighlighted;
      console.log(this.results.RealEstatePropertiesInHome)
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

</style>
