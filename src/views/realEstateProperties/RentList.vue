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
      </div>
      <BlogPagination v-if="!loading" :currentPage="page" :totalPages="totalPages" :filter="filter" :typologie="typologie"
      :location="location" :code="code" :from="from" :to="to" :agencyId="agencyId" @changePage="handlePageChange" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr3 from '@/assets/images/banner/bnr3.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import BlogPagination from '@/elements/BlogPagination.vue'
import axios from 'axios'

export default defineComponent({
  name: 'sale-list',
  components: { CommonBanner, Swiper, SwiperSlide, BlogPagination },
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
        `https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/GetMain?currentPage=${_page}&filterRequest=${_filter}&status=Affitto&typologie=${_typologie}&location=${_location}&code=${_code}&from=${_from}&to=${_to}&agencyId=${_agencyId}`
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
