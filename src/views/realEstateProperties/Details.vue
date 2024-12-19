<template>
  <div class="page-content bg-white">

    <CommonBanner :img="bannerImg" title="Dettaglio Immobile" text="Dettaglio Immobile" />

    <!-- <div class="container1" style="display: flex; align-items: center; margin-top: 20px; margin-left: 0;">
      <div style="margin-right: 10px;">
        <img src="@/assets/images/work/pic4.jpg" alt="Icona" style="height: 350px; width: 350px; object-fit: cover;" />
      </div>
      <div class="icon-content">
        <h4 style="font-size: 35px; margin: 0;">Dettaglio</h4>
        <p style="font-size: 18px; margin: 0; color: #555;">
          <RouterLink to="/">Home</RouterLink> - Dettaglio
        </p>
      </div>
    </div> -->

    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <section v-if="!loading" class="content-inner-1 mt-2" :style="`background-image: url(${bg2});`">
      <div class="container">
        <div class="section-head style-1">
          <h1> {{ item.Title }}</h1>
          <h1>€ {{ item.Price }} </h1>
          <p>Cod. 00{{ item.Id }}</p>
        </div>
      </div>

      <div v-if="item" class="container-fluid">
        <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">
          <Swiper class="swiper-container swiper-portfolio lightgallery aos-item" :slides-per-view="4"
            :space-between="30" :loop="true" :breakpoints="{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              575: { slidesPerView: 2 },
              240: { slidesPerView: 1 }
            }" :modules="module" :autoplay="{ delay: 1500 }" :speed="1500">
            <SwiperSlide class="swiper-slide" v-for="({ Url }, ind) in photos" :key="ind">
              <div :class="`dz-box overlay style-1`">
                <div class="dz-media" style="max-height: 300px;">
                  <img :src="Url" alt="" />
                </div>
                <div class="dz-info">
                  <span :data-src="Url" class="view-btn lightimg">
                    <img :src="Url" alt="" style="display: none" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Lightgallery>
      </div>
      <div class="container">
        <div class="row mt-5">
          <div class="icon-content">
            <div class="icon-bx-wraper style-7 left m-b30">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-placeholder"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Indirizzo</h4>
                <p>{{ item.AddressLine }} - {{ item.Town }} - {{ item.PostCode }} - {{ item.State }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5">
          <div class="col-4">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-bed me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">{{ item.Bedrooms }} Camere</strong>
            </div>
          </div>
          <div class="col-4">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-home  me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">{{ item.CommercialSurfaceate }}m²</strong>
            </div>
          </div>
          <div class="col-4">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-car me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">{{ item.ParkingSpaces }} Posti Auto</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5">
          <div class="col-4">
            <div class="feature-item me-2" style="display: flex; align-items: center; width: 30%;">
              <i class="fa fa-thermometer-empty" style="font-size: 30px; margin-right: 8px;"></i>
              <strong style="font-size: 12px">Riscaldamento {{ item.Heating }}</strong>
            </div>
          </div>
          <div class="col-4">
            <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
              <i class="fas fa-bath me-2" style="font-size: 30px; margin-right: 8px;"></i>
              <strong style="font-size: 12px">{{ item.Bathrooms }} Bagno</strong>
            </div>
          </div>
          <div class="col-4">
            <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
              <i class="fa fa-fire me-2" aria-hidden="true" style="font-size: 30px; margin-right: 8px;"></i>
              <strong style="font-size: 12px">Classe Energetica {{ item.EnergyClass }}</strong>
            </div>
          </div>
        </div>
      </div>



      <div class="container">
        <div class="row mb-lg-5 mb-3">
          <div class="col-lg-12 col-md-12 align-self-center aos-item">
            <h6 class="dz-title">
              <p><strong>Agente: </strong> {{ item.Agent.Name }} {{
                item.Agent.LastName }} </p>
                </h6>
              <p>Cod. 00{{ item.Id }}</p>
              <h1 class="sub-title text-primary"> € {{ item.Price.toString()
               .replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}</h1>
              <h3><i class="fa fa-map-pin"></i> {{ item.Town }}, {{
                item.AddressLine }}</h3>
              <h6> {{ item.TypeOfProperty }}</h6>
              <h6><img src="@/assets/images/energy.png" /> {{ item.EnergyClass }}
              </h6>
              <p>
                {{ item.Description}}...
              </p>
          </div>
          <div class=" col-lg-6 icon-bx-wraper style-3 left m-b0">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-telephone"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Contatti</h4>
                <p>info@thinkhome.it</p>
              </div>
            </div>
          <div class="col-lg-6 col-md-12 m-b30 aos-item">
            <img src="@/assets/images/work/pic4.jpg" class="d-lg-block d-none" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner">
      <div class="container">
        <div class="contact-area aos-item mt--2">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-secondary">Richiedi Infromazioni</h6>
            <h2 class="title">Inserisci i dati</h2>
          </div>
          <form class="dz-form dzForm contact-bx" method="POST">
            <input type="hidden" class="form-control" name="dzToDo" value="Contact" />
            <div class="dzFormMsg"></div>
            <div class="row sp10">
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required name="dzFirstName" placeholder="Nome" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required name="dzLastName" placeholder="Cognome" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required name="dzEmail" placeholder="Email" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required name="dzPhoneNumber" placeholder="Cell." />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required name="dzOther" placeholder="Oggetto" />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <textarea name="dzMessage" rows="5" class="form-control" placeholder="Messaggio"></textarea>
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-recaptcha">
                  <div class="g-recaptcha"></div>
                  <input class="form-control d-none" style="display: none" data-recaptcha="true" required
                    data-error="Please complete the Captcha" />
                </div>
              </div>
              <div class="col-sm-12 text-center">
                <button name="submit" type="reset" value="submit" class="btn btn-primary btn-rounded">
                  Invia <i class="m-l10 fas fa-caret-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="content-inner-1">
      <div class="container-fluid">
        <Home3Accordian />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import bnr7 from '@/assets/images/banner/bnr7.jpg'
import bannerImg from '@/assets/images/banner/1920x700.jpg'
import CommonBanner from '@/elements/CommonBanner.vue'
import bg2 from '@/assets/images/background/bg2.png'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import axios from 'axios'
import Home3Accordian from '@/components/Home3Accordian.vue'
import work_pic1 from '@/assets/images/work/work-1/pic-13.jpg'

export default defineComponent({
  components: { Lightgallery, Swiper, SwiperSlide, Home3Accordian, CommonBanner },
  setup() {
    return {
      bnr7,
      bg2,
      bannerImg,
      module: [Autoplay],
      work_pic1
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      plugins: [lgThumbnail, lgZoom],
      imgSelected: "",
      loading: true,
      photos: [{
        Url: ""
      }],
      item: {
        Id: 0,
        Title: "",
        Agent: { Name: "", LastName: "", Email: "", MobilePhoneNumber: "" },
        AddressLine: "",
        Town: "",
        PostCode: "",
        State: "",
        Price: 0,
        CommercialSurfaceate: "",
        ParkingSpaces: "",
        Heating: "",
        Bathrooms: "",
        EnergyClass: "",
        Bedrooms: "",
        Description: "",
        TypeOfProperty: "",
        Photos: {
          $values: [{
            Url: ""
          }]
        }
      },
    }
  },
  methods: {
    async getAnswer() {
      const { data } = await axios.get("https://yesno.wtf/api");
    },
    async getItem() {
      const result = await axios.get("https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/GetById?id=" + this.$route.params.id);
      this.item = result.data;
      this.photos = result.data.Photos.$values;
      this.imgSelected = this.photos[0].Url;
      this.loading = false;
    },
    selectImage(url: string) {
      this.imgSelected = url;
    },
    previousImage() {
      // Passa all'immagine precedente
      const currentIndex = this.photos.findIndex(photo => photo.Url === this.imgSelected);
      const newIndex = (currentIndex - 1 + this.photos.length) % this.photos.length;
      this.imgSelected = this.photos[newIndex].Url;
    },
    nextImage() {
      // Passa all'immagine successiva
      const currentIndex = this.photos.findIndex(photo => photo.Url === this.imgSelected);
      const newIndex = (currentIndex + 1) % this.photos.length;
      this.imgSelected = this.photos[newIndex].Url;
    },
  },
  async beforeMount() {
    this.getAnswer();
    await this.getItem();
  }
})
</script>
<style scoped>
.modal-content {
  height: 390px;
  z-index: 99999;
}

@media screen and (max-width: 991px) {
  .modal-content {
    height: 282px;
  }

  .col-lg-6.col-md-6.aos-item-Foto {
    height: 380px;

  }

  .container1 {
    flex-direction: column;
    /* Dispone gli elementi verticalmente su schermi piccoli */
    align-items: center;
  }

  .container img {
    height: auto;
    /* Adatta l'altezza per schermi piccoli */
    width: 80%;
    /* Limita la larghezza al 90% dello schermo */
  }

  .icon-content h4 {
    font-size: 28px;
    /* Riduce la dimensione del titolo per il mobile */
    margin-bottom: 8px;
    /* Aggiunge uno spazio sotto il titolo */
  }

  .icon-content p {
    font-size: 16px;
    /* Riduce il testo per schermi piccoli */
    color: #666;
    /* Un colore più morbido per il mobile */
  }
}

@media screen and (max-width: 575px) {
  .modal-content {
    height: 30vmax;
  }

  .icon-content h4 {
    font-size: 28px;
    /* Riduce la dimensione del titolo per il mobile */
    margin-bottom: 8px;
    /* Aggiunge uno spazio sotto il titolo */
  }

  .icon-content p {
    font-size: 16px;
    /* Riduce il testo per schermi piccoli */
    color: #666;
    /* Un colore più morbido per il mobile */
  }
}

@media screen and (max-width: 400px) {
  .modal-content {
    height: 23vmax;
  }
}

.mfp-close {
  border: none;
  outline: none;
  position: absolute;
  right: 0px;
  background-color: transparent;
  color: white;
}

/* Stile per migliorare il layout delle frecce */
.row {
  position: relative;
  /* Per posizionare i pulsanti rispetto al contenitore */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

button.btn.btn-outline-secondary.position-absolute {
  position: absolute;
  background-color: rgba(198, 164, 126, 0.4);
  top: 50%;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  transform: translateY(-50%);
  z-index: 1;
}

/* 
button:hover {
  background: rgba(198, 164, 126, 0.2);
  color: #eb860b4e;
  
}  */

/* Posizioni specifiche per le frecce */
button.left {
  left: 300px;
  /* Avvicina la freccia sinistra */
}

button.right {
  right: 300px;
  /* Avvicina la freccia destra */
}

/* Media query per schermi più piccoli */
@media (max-width: 991px) {
  button.btn.btn-outline-secondary.position-absolute {
    width: 40px;
    /* Riduci ulteriormente dimensioni pulsanti */
    height: 40px;
    font-size: 20px;
  }

  button.left {
    left: -0px;
    /* Allinea la freccia sinistra per il mobile */
  }

  button.right {
    right: -0px;
    /* Allinea la freccia destra per il mobile */
  }
}

/* Per schermi molto piccoli (mobile stretto) */
@media (max-width: 576px) {
  button.btn.btn-outline-secondary.position-absolute {
    width: 30px;
    /* Riduci ulteriormente dimensioni */
    height: 30px;
    font-size: 16px;
  }

  button.left {
    left: -0px;
    /* Sposta la freccia sinistra */
  }

  button.right {
    right: -0px;
    /* Sposta la freccia destra */
  }

  img {
    width: 100%;
    /* Rendi l'immagine responsiva */
    height: auto;
    /* Mantieni proporzioni */
  }
}
</style>