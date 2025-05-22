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
              <input placeholder="Località" class="form-control" list="datalistOptions"  v-model="formData.Location">
<datalist id="datalistOptions">
  <!-- ABRUZZO -->
  <option value="L'AQUILA">ABRUZZO \ L'AQUILA (AQ)</option>
  <option value="TAGLIACOZZO">ABRUZZO \ L'AQUILA (AQ) \ TAGLIACOZZO</option>

  <!-- LAZIO - FROSINONE (FR) -->
  <option value="FROSINONE">LAZIO \ FROSINONE (FR)</option>
  <option value="ANAGNI">LAZIO \ FROSINONE (FR) \ ANAGNI</option>
  <option value="FIUGGI">LAZIO \ FROSINONE (FR) \ FIUGGI</option>
  <option value="FROSINONE">LAZIO \ FROSINONE (FR) \ FROSINONE</option>
  <option value="PALIANO">LAZIO \ FROSINONE (FR) \ PALIANO</option>
  <option value="SERRONE">LAZIO \ FROSINONE (FR) \ SERRONE</option>

  <!-- LAZIO - LATINA (LT) -->
  <option value="LATINA">LAZIO \ LATINA (LT)</option>
  <option value="APRILIA">LAZIO \ LATINA (LT) \ APRILIA</option>
  <option value="CORI">LAZIO \ LATINA (LT) \ CORI</option>
  <option value="ROCCA MASSIMA">LAZIO \ LATINA (LT) \ ROCCA MASSIMA</option>
  <option value="SABAUDIA">LAZIO \ LATINA (LT) \ SABAUDIA</option>
  <option value="SAN FELICE CIRCEO">LAZIO \ LATINA (LT) \ SAN FELICE CIRCEO</option>

  <!-- LAZIO - ROMA (RM) -->
  <option value="ROMA">LAZIO \ ROMA (RM)</option>
  <option value="ALBANO LAZIALE">LAZIO \ ROMA (RM) \ ALBANO LAZIALE</option>
  <option value="ALESSANDRINO">LAZIO \ ROMA (RM) \ ALESSANDRINO</option>
  <option value="ANZIO">LAZIO \ ROMA (RM) \ ANZIO</option>
  <option value="ARDEA">LAZIO \ ROMA (RM) \ ARDEA</option>
  <option value="ARTENA">LAZIO \ ROMA (RM) \ ARTENA</option>
  <option value="BELLEGRA">LAZIO \ ROMA (RM) \ BELLEGRA</option>
  <option value="CAMPAGNANO DI ROMA">LAZIO \ ROMA (RM) \ CAMPAGNANO DI ROMA</option>
  <option value="CASAPE">LAZIO \ ROMA (RM) \ CASAPE</option>
  <option value="CASTEL SAN PIETRO ROMANO">LAZIO \ ROMA (RM) \ CASTEL SAN PIETRO ROMANO</option>
  <option value="CAVE">LAZIO \ ROMA (RM) \ CAVE</option>
  <option value="COLLE PALME">LAZIO \ ROMA (RM) \ CAVE \ COLLE PALME</option>
  <option value="SAN BARTOLOMEO">LAZIO \ ROMA (RM) \ CAVE \ SAN BARTOLOMEO</option>
  <option value="COLLEFERRO">LAZIO \ ROMA (RM) \ COLLEFERRO</option>
  <option value="COLONNA">LAZIO \ ROMA (RM) \ COLONNA</option>
  <option value="FIANO ROMANO">LAZIO \ ROMA (RM) \ FIANO ROMANO</option>
  <option value="FIUMICINO">LAZIO \ ROMA (RM) \ FIUMICINO</option>
  <option value="FRASCATI">LAZIO \ ROMA (RM) \ FRASCATI</option>
  <option value="GALLICANO NEL LAZIO">LAZIO \ ROMA (RM) \ GALLICANO NEL LAZIO</option>
  <option value="GAVIGNANO">LAZIO \ ROMA (RM) \ GAVIGNANO</option>
  <option value="GENAZZANO">LAZIO \ ROMA (RM) \ GENAZZANO</option>
  <option value="GROTTAFERRATA">LAZIO \ ROMA (RM) \ GROTTAFERRATA</option>
  <option value="GUIDONIA MONTECELIO">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO</option>
  <option value="ALBUCCIONE">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ ALBUCCIONE</option>
  <option value="CASACALDA">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ CASACALDA</option>
  <option value="CASTEL ARCIONE">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ CASTEL ARCIONE</option>
  <option value="COLLE VERDE">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ COLLE VERDE</option>
  <option value="LA BOTTE">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ LA BOTTE</option>
  <option value="MARCO SIMONE">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ MARCO SIMONE</option>
  <option value="MONTECELIO">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ MONTECELIO</option>
  <option value="SETTEVILLE">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ SETTEVILLE</option>
  <option value="VILLA NOVA">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ VILLA NOVA</option>
  <option value="VILLALBA">LAZIO \ ROMA (RM) \ GUIDONIA MONTECELIO \ VILLALBA</option>
  <option value="LABICO">LAZIO \ ROMA (RM) \ LABICO</option>
  <option value="COLLE SPINA">LAZIO \ ROMA (RM) \ LABICO \ COLLE SPINA</option>
  <option value="LANUVIO">LAZIO \ ROMA (RM) \ LANUVIO</option>
  <option value="LARIANO">LAZIO \ ROMA (RM) \ LARIANO</option>
  <option value="MARINO">LAZIO \ ROMA (RM) \ MARINO</option>
  <option value="MONTE PORZIO CATONE">LAZIO \ ROMA (RM) \ MONTE PORZIO CATONE</option>
  <option value="MONTECOMPATRI">LAZIO \ ROMA (RM) \ MONTECOMPATRI</option>
  <option value="COLLE MATTIA">LAZIO \ ROMA (RM) \ MONTECOMPATRI \ COLLE MATTIA</option>
  <option value="LAGHETTO">LAZIO \ ROMA (RM) \ MONTECOMPATRI \ LAGHETTO</option>
  <option value="MONTELANICO">LAZIO \ ROMA (RM) \ MONTELANICO</option>
  <option value="NETTUNO">LAZIO \ ROMA (RM) \ NETTUNO</option>
  <option value="OLEVANO ROMANO">LAZIO \ ROMA (RM) \ OLEVANO ROMANO</option>
  <option value="PALESTRINA">LAZIO \ ROMA (RM) \ PALESTRINA</option>
  <option value="CARCHITTI">LAZIO \ ROMA (RM) \ PALESTRINA \ CARCHITTI</option>
  <option value="VALVARINO">LAZIO \ ROMA (RM) \ PALESTRINA \ VALVARINO</option>
  <option value="PALOMBARA SABINA">LAZIO \ ROMA (RM) \ PALOMBARA SABINA</option>
  <option value="POLI">LAZIO \ ROMA (RM) \ POLI</option>
  <option value="POMEZIA">LAZIO \ ROMA (RM) \ POMEZIA</option>
  <option value="PORTUENSE">LAZIO \ ROMA (RM) \ PORTUENSE</option>
  <option value="RIANO">LAZIO \ ROMA (RM) \ RIANO</option>
  <option value="ROCCA DI CAVE">LAZIO \ ROMA (RM) \ ROCCA DI CAVE</option>
  <option value="ROCCA PRIORA">LAZIO \ ROMA (RM) \ ROCCA PRIORA</option>
  <option value="COLLE DI FUORI">LAZIO \ ROMA (RM) \ ROCCA PRIORA \ COLLE DI FUORI</option>
  <option value="ROMA">LAZIO \ ROMA (RM) \ ROMA</option>
  <option value="ACILIA">LAZIO \ ROMA (RM) \ ROMA \ ACILIA</option>
  <option value="ALESSANDRINO">LAZIO \ ROMA (RM) \ ROMA \ ALESSANDRINO</option>
  <option value="BOCCEA">LAZIO \ ROMA (RM) \ ROMA \ BOCCEA</option>
  <option value="BORGHESIANA">LAZIO \ ROMA (RM) \ ROMA \ BORGHESIANA</option>
  <option value="CASAL PALOCCO">LAZIO \ ROMA (RM) \ ROMA \ CASAL PALOCCO</option>
  <option value="CASALOTTI">LAZIO \ ROMA (RM) \ ROMA \ CASALOTTI</option>
  <option value="CASTEL FUSANO">LAZIO \ ROMA (RM) \ ROMA \ CASTEL FUSANO</option>
  <option value="CASTELVERDE">LAZIO \ ROMA (RM) \ ROMA \ CASTELVERDE</option>
  <option value="CENTOCELLE">LAZIO \ ROMA (RM) \ ROMA \ CENTOCELLE</option>
  <option value="CINECITTÀ">LAZIO \ ROMA (RM) \ ROMA \ CINECITTÀ</option>
  <option value="COLLE MONFORTANI">LAZIO \ ROMA (RM) \ ROMA \ COLLE MONFORTANI</option>
  <option value="COLLE PRENESTINO">LAZIO \ ROMA (RM) \ ROMA \ COLLE PRENESTINO</option>
  <option value="COLLE DEL SOLE">LAZIO \ ROMA (RM) \ ROMA \ COLLE DEL SOLE</option>
  <option value="CORCOLLE">LAZIO \ ROMA (RM) \ ROMA \ CORCOLLE</option>
  <option value="CORCOLLE ALTO">LAZIO \ ROMA (RM) \ ROMA \ CORCOLLE ALTO</option>
  <option value="DON BOSCO">LAZIO \ ROMA (RM) \ ROMA \ DON BOSCO</option>
  <option value="EUR">LAZIO \ ROMA (RM) \ ROMA \ EUR</option>
  <option value="FINOCCHIO">LAZIO \ ROMA (RM) \ ROMA \ FINOCCHIO</option>
  <option value="FONTE LAURENTINA">LAZIO \ ROMA (RM) \ ROMA \ FONTE LAURENTINA</option>
  <option value="FOSSO SAN GIULIANO">LAZIO \ ROMA (RM) \ ROMA \ FOSSO SAN GIULIANO</option>
  <option value="GIARDINETTI">LAZIO \ ROMA (RM) \ ROMA \ GIARDINETTI</option>
  <option value="GIARDINI DI CORCOLLE">LAZIO \ ROMA (RM) \ ROMA \ GIARDINI DI CORCOLLE</option>
  <option value="INFERNETTO">LAZIO \ ROMA (RM) \ ROMA \ INFERNETTO</option>
  <option value="LA PISANA">LAZIO \ ROMA (RM) \ ROMA \ LA PISANA</option>
  <option value="LA STORTA">LAZIO \ ROMA (RM) \ ROMA \ LA STORTA</option>
  <option value="MONTE SACRO">LAZIO \ ROMA (RM) \ ROMA \ MONTE SACRO</option>
  <option value="LUNGHEZZA">LAZIO \ ROMA (RM) \ ROMA \ LUNGHEZZA</option>
  <option value="OSTERIA DEL CURATO">LAZIO \ ROMA (RM) \ ROMA \ OSTERIA DEL CURATO</option>
  <option value="OSTIA">LAZIO \ ROMA (RM) \ ROMA \ OSTIA</option>
  <option value="OSTIA ANTICA">LAZIO \ ROMA (RM) \ ROMA \ OSTIA ANTICA</option>
  <option value="OSTIA LEVANTE">LAZIO \ ROMA (RM) \ ROMA \ OSTIA LEVANTE</option>
  <option value="OSTIA PONENTE">LAZIO \ ROMA (RM) \ ROMA \ OSTIA PONENTE</option>
  <option value="PANTANO BORGHESE">LAZIO \ ROMA (RM) \ ROMA \ PANTANO BORGHESE</option>
  <option value="PIGNETO">LAZIO \ ROMA (RM) \ ROMA \ PIGNETO</option>
  <option value="PONTE GALERIA">LAZIO \ ROMA (RM) \ ROMA \ PONTE GALERIA</option>
  <option value="PONTE DI NONA">LAZIO \ ROMA (RM) \ ROMA \ PONTE DI NONA</option>
  <option value="PORTUENSE">LAZIO \ ROMA (RM) \ ROMA \ PORTUENSE</option>
  <option value="PRATO FIORITO">LAZIO \ ROMA (RM) \ ROMA \ PRATO FIORITO</option>
  <option value="PRIMA PORTA">LAZIO \ ROMA (RM) \ ROMA \ PRIMA PORTA</option>
  <option value="ROCCA CENCIA">LAZIO \ ROMA (RM) \ ROMA \ ROCCA CENCIA</option>
  <option value="ROMANINA">LAZIO \ ROMA (RM) \ ROMA \ ROMANINA</option>
  <option value="ROMA EST">LAZIO \ ROMA (RM) \ ROMA \ ROMA EST</option>
  <option value="SAN VITTORINO">LAZIO \ ROMA (RM) \ ROMA \ SAN VITTORINO</option>
  <option value="SAXA RUBRA">LAZIO \ ROMA (RM) \ ROMA \ SAXA RUBRA</option>
  <option value="SETTECAMINI">LAZIO \ ROMA (RM) \ ROMA \ SETTECAMINI</option>
  <option value="TOR BELLA MONACA">LAZIO \ ROMA (RM) \ ROMA \ TOR BELLA MONACA</option>
  <option value="TOR TRE TESTE">LAZIO \ ROMA (RM) \ ROMA \ TOR TRE TESTE</option>
  <option value="TOR VERGATA">LAZIO \ ROMA (RM) \ ROMA \ TOR VERGATA</option>
  <option value="TOR DE CENCI">LAZIO \ ROMA (RM) \ ROMA \ TOR DE CENCI</option>
  <option value="TORRE ANGELA">LAZIO \ ROMA (RM) \ ROMA \ TORRE ANGELA</option>
  <option value="TORRE GAIA">LAZIO \ ROMA (RM) \ ROMA \ TORRE GAIA</option>
  <option value="TORRE MAURA">LAZIO \ ROMA (RM) \ ROMA \ TORRE MAURA</option>
  <option value="TORRE SPACCATA">LAZIO \ ROMA (RM) \ ROMA \ TORRE SPACCATA</option>
  <option value="TUSCOLANA">LAZIO \ ROMA (RM) \ ROMA \ TUSCOLANA</option>
  <option value="VALLERANO">LAZIO \ ROMA (RM) \ ROMA \ VALLERANO</option>
  <option value="VERMICINO">LAZIO \ ROMA (RM) \ ROMA \ VERMICINO</option>
  <option value="VILLA VERDE">LAZIO \ ROMA (RM) \ ROMA \ VILLA VERDE</option>
  <option value="VILLAGGIO BREDA">LAZIO \ ROMA (RM) \ ROMA \ VILLAGGIO BREDA</option>
  <option value="VILLAGGIO PRENESTINO">LAZIO \ ROMA (RM) \ ROMA \ VILLAGGIO PRENESTINO</option>
  <option value="SAN CESAREO">LAZIO \ ROMA (RM) \ SAN CESAREO</option>
  <option value="SAN GREGORIO DA SASSOLA">LAZIO \ ROMA (RM) \ SAN GREGORIO DA SASSOLA</option>
  <option value="SAN VITO ROMANO">LAZIO \ ROMA (RM) \ SAN VITO ROMANO</option>
  <option value="SEGNI">LAZIO \ ROMA (RM) \ SEGNI</option>
  <option value="SUBIACO">LAZIO \ ROMA (RM) \ SUBIACO</option>
  <option value="TIVOLI">LAZIO \ ROMA (RM) \ TIVOLI</option>
  <option value="VALMONTONE">LAZIO \ ROMA (RM) \ VALMONTONE</option>
  <option value="VELLETRI">LAZIO \ ROMA (RM) \ VELLETRI</option>
  <option value="ZAGAROLO">LAZIO \ ROMA (RM) \ ZAGAROLO</option>
  <option value="CENTRO PAESE">LAZIO \ ROMA (RM) \ ZAGAROLO \ CENTRO PAESE</option>
  <option value="VALLE MARTELLA">LAZIO \ ROMA (RM) \ ZAGAROLO \ VALLE MARTELLA</option>
  <option value="VIA PRENESTINA">LAZIO \ ROMA (RM) \ ZAGAROLO \ VIA PRENESTINA</option>

  <!-- LAZIO - VITERBO (VT) -->
  <option value="VITERBO">LAZIO \ VITERBO (VT)</option>
  <option value="VITERBO">LAZIO \ VITERBO (VT) \ VITERBO</option>
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
            <h2 class="title">I nostri immobili</h2>
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
            <RouterLink :to="{ name: 'dettaglio', params: { id: results.RealEstatePropertiesHighlighted.Id } }"
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

<script lang="ts">
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
    return { backgrouBg2 }
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
    await this.getItems();
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
      const result = await axios.get("https://thinkhomebe.azurewebsites.net/api/Generic/GetHomeDetails");
      this.results.RealEstatePropertiesInHome = result.data.RealEstatePropertiesInHome;
      this.results.RealEstatePropertiesHighlighted = result.data.RealEstatePropertiesHighlighted;
      this.loading = false;
    },
    async submit() {
      this.loading = true;
            
      let routeName;
      if (this.formData.RequestType === 'Affitto') {routeName = 'immobili_in_affitto';
      } else if (this.formData.RequestType === 'Vendita') {routeName = 'immobili_in_vendita';
      } else if (this.formData.RequestType === 'Aste') {routeName = 'aste_immobiliari';
      }      
      this.$router.push({
        name: routeName, params: {
          tipologia: this.formData.PropertyType, localita: this.formData.Location ?? "Qualsiasi", da: this.formData.From,
          codice: this.formData.Code ?? 0, a: this.formData.To
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
