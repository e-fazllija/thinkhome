<template>
  <div class="page-content bg-white">
   
    <div class="container1" style="display: flex; align-items: center; margin-top: 20px; margin-left: 0;">
      <div style="margin-right: 10px;">
                 <img src="@/assets/images/work/pic4.jpg" alt="Icona" style="height: 350px; width: 350px; object-fit: cover;" />
           </div>
           <div class="icon-content">
                 <h4 style="font-size: 35px; margin: 0;">Dettaglio</h4>
                 <p style="font-size: 18px; margin: 0; color: #555;"><RouterLink to="/">Home</RouterLink> - Dettaglio</p>
           </div>
      </div>

    <section class="section-full content-inner-5 port-detail" :style="`background-image: url(${bg2}); margin-top: 20px;
          background-position: right bottom;
          background-size: 100%;
          background-repeat: repeat;`">
    <div class="content-inner-5">
      <div v-if="item" class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 align-self-center aos-item mb-6">
            <h1> {{ item.Title }}</h1>
            <h1>€ {{item.Price}} </h1>
            <p>Cod. 00{{item.Id}}</p> 
          </div>
        </div>
     

        <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">
          <div class="row justify-content-center align-items-center mb-5 position-relative">
            <button  class="btn btn-outline-secondary position-absolute left" @click="previousImage">&#8249;
            </button>
      
             <img :src="imgSelected" alt=""
             style="border-radius: 5px; padding: 1px; width: 600px; height: 600px; object-fit: cover;" />
      
           <button class="btn btn-outline-secondary position-absolute right" @click="nextImage">&#8250;
           </button>
          </div>

          <Swiper class="swiper-container swiper-portfolio lightgallery aos-item"
           :slides-per-view="4"
           :space-between="30" 
           :loop="true"
           :breakpoints="{
              // 1391: { slidesPerView: 3 },
              // 975: { slidesPerView: 2 },
              // 640: { slidesPerView: 1 }
           1200: { slidesPerView: 4 },
           991: { slidesPerView: 3 },
           575: { slidesPerView: 2 },
           240: { slidesPerView: 1 }
            }" :modules="module" :autoplay="{ delay: 1500 }" :speed="1500">
            <SwiperSlide class="swiper-slide" v-for="({ Url }, ind) in photos" :key="ind">
              <div :class="`dz-box overlay style-1 mt-5`">
                <div class="dz-media">
                  <img :src="Url" alt=""
                  style=" border-radius: 5px; padding: 1px; width: 300px; height: 300px; object-fit: cover;"
                  @click="selectImage(Url)" />
                </div>
                <!-- <div class="dz-info">
                  <span :data-src="Url" class="view-btn lightimg">
                    <img :src="Url" alt="" style="display: none" />
                  </span>
                </div> -->
              </div>
            </SwiperSlide>
          </Swiper>
        </Lightgallery>

      </div>
    </div>

       <div class="container" style="display: flex; align-items: center; margin-top: 20px;">
             <div class="icon-bx-sm bg-primary" style="margin-right: 10px;">
                   <span class="icon-cell"><i class="flaticon-placeholder"></i></span>
             </div>
             <div class="icon-content">
                  <h4 class="title m-b2">Indirizzo</h4>
                  <p>{{ item.AddressLine }} - {{ item.Town }} - {{ item.PostCode }} - {{ item.State }}</p>
             </div>
       </div>

      <div class="container" style="display: flex; justify-content: space-between; margin-top: 20px;">
            <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
                  <i class="fa fa-bed"  style="font-size: 30px; margin-right: 8px;"></i>
                  <strong style="font-size: 12px">{{item.Bedrooms}} Camere</strong>
             </div>
             <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
                   <i class="fa fa-home" style="font-size: 30px; margin-right: 8px;"></i>
                   <strong style="font-size: 12px">{{item.CommercialSurfaceate}}m²</strong>
             </div>
             <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
                   <i class="fa fa-car" style="font-size: 30px; margin-right: 8px;"></i>
                   <strong style="font-size: 12px">{{item.ParkingSpaces}}  Posti Auto</strong>
             </div>
       </div>

       <div class="container" style="display: flex; justify-content: space-between; margin-top: 20px; margin-bottom: 70px;">
             <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
                   <i class="fa fa-thermometer-empty" style="font-size: 30px; margin-right: 8px;"></i>
                   <strong style="font-size: 12px">Riscaldamento  {{item.Heating}}</strong>
             </div>
             <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
                   <i class="fas fa-bath" style="font-size: 30px; margin-right: 8px;"></i>
                   <strong style="font-size: 12px">{{item.Bathrooms}}  Bagno</strong>
             </div>
             <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
                   <i class="fa fa-fire" aria-hidden="true" style="font-size: 30px; margin-right: 8px;"></i>
                   <strong style="font-size: 12px">Classe Energetica  {{item.EnergyClass}}</strong>
             </div>
      </div>

      <div class="container">
        <div class="row mb-lg-5 mb-5">
          <p style="font-size: 1.4rem; line-height: 1.3;"><strong>Agente: </strong> {{ item.Agent.Name}} {{ item.Agent.LastName}} </p>
          <p>Cod. 00{{item.Id}}</p> 
          <div class="col-lg-6 col-md-6 align-self-center aos-item">
              <p style="font-size: 1.4rem; line-height: 1.3;">
              <h1>Descrizione</h1>
              <h1 style="font-size: 1.4rem; line-height: 1.3;">{{item.Title}}  -   € {{ item.Price }}
              </h1>- {{ item.Description }}</p>
            <div class="icon-bx-wraper style-7 left m-b30">
            </div>
            <div class="icon-bx-wraper style-3 left m-b30">
              <div class="icon-bx-sm bg-primary">
                <span class="icon-cell"><i class="flaticon-telephone"></i></span>
              </div>
              <div class="icon-content">
                <h4 class="title m-b5">Contatti</h4>
                <p>info@thinkhome.it</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 aos-item-Foto">
            <img src="@/assets/images/work/pic4.jpg" alt="" />
          </div>
          <!-- <div class="col-lg-6 col-md-12 m-b30 aos-item">
              <img src="@/assets/images/work/pic2.jpg" class="d-lg-block d-none" alt="" />
            </div> -->
        </div>
      </div>
    </section>
    <section class="content-inner-1 pt-6">
      <div class="map-iframe">
      </div>
      <div class="container">
        <div class="contact-area aos-item">
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
                  <input type="text" class="form-control" required name="dzFirstName"  placeholder="Nome" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text"  class="form-control"  required  name="dzLastName" placeholder="Cognome" />
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
                  <textarea name="dzMessage" rows="5" class="form-control" placeholder="Messaggio" ></textarea>
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-recaptcha">
                  <div class="g-recaptcha"></div>
                  <input class="form-control d-none" style="display: none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                </div>
              </div>
              <div class="col-sm-12 text-center">
                <button
                  name="submit"
                  type="reset"
                  value="submit"
                  class="btn btn-primary btn-rounded"
                >
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
import bnr7 from '@/assets/images/banner/bnr4.jpg'
import CommonBanner from '@/elements/CommonBanner.vue'
import bg2 from '@/assets/images/background/bg2.png'
import service_pic1 from '@/assets/images/services/pic1.jpg'
import service_pic2 from '@/assets/images/services/pic2.jpg'
import service_pic3 from '@/assets/images/services/pic3.jpg'
import work_pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-3.jpg'
import work_pic4 from '@/assets/images/work/work-1/pic-4.jpg'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import axios from 'axios'
import Home3Accordian from '@/components/Home3Accordian.vue'

export default defineComponent({
  components: {  Lightgallery, Swiper, SwiperSlide, Home3Accordian },
  setup() {
    return {
      bnr7,
      bg2,
      galleryBlog: [{ img: service_pic1 }, { img: service_pic2 }, { img: service_pic3 }],
      ourBlog: [
        {
          img: work_pic1,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern House Interior',
          text: 'New York',
          setStyle: 'mt-5'
        },
        {
          img: work_pic2,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project,',
          text: 'Paris'
        },
        {
          img: work_pic3,
          subtitle: 'INTERIOR DESIGN',
          title: 'Modern Family House,',
          text: 'Italy',
          setStyle: 'mt-5'
        },
        {
          img: work_pic4,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project, ',
          text: 'Paris'
        },
        {
          img: work_pic2,
          subtitle: 'ARCHITECTURAL',
          title: 'Residential Project,',
          text: 'Paris',
          setStyle: 'mt-5'
        }
      ],
      module: [Autoplay]
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      plugins: [lgThumbnail, lgZoom],
      imgSelected: "",
      photos:[{
        Url: ""
      }],
      item: {
        Id: 0,
        Title:"",
        Agent:{Name:"",LastName:"",Email:"", MobilePhoneNumber:""},
        AddressLine: "",
        Town: "",
        PostCode: "",
        State: "",
        Price: 0,
        CommercialSurfaceate:"",
        ParkingSpaces:"",
        Heating:"",
        Bathrooms:"",
        EnergyClass:"",
        Bedrooms:"",
        Description: "",
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
      // this.loading = false;
    },
    selectImage(url: string){
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
  .col-lg-6.col-md-6.aos-item-Foto{
    height: 380px;

  }
  .container1 {
      flex-direction: column; /* Dispone gli elementi verticalmente su schermi piccoli */
      align-items: center;
    }

    .container img {
      height: auto; /* Adatta l'altezza per schermi piccoli */
      width: 80%; /* Limita la larghezza al 90% dello schermo */
    }

    .icon-content h4 {
      font-size: 28px; /* Riduce la dimensione del titolo per il mobile */
      margin-bottom: 8px; /* Aggiunge uno spazio sotto il titolo */
    }

    .icon-content p {
      font-size: 16px; /* Riduce il testo per schermi piccoli */
      color: #666; /* Un colore più morbido per il mobile */
    }
}

@media screen and (max-width: 575px) {
  .modal-content {
    height: 30vmax;
  }
  .icon-content h4 {
      font-size: 28px; /* Riduce la dimensione del titolo per il mobile */
      margin-bottom: 8px; /* Aggiunge uno spazio sotto il titolo */
    }

    .icon-content p {
      font-size: 16px; /* Riduce il testo per schermi piccoli */
      color: #666; /* Un colore più morbido per il mobile */
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
  position: relative; /* Per posizionare i pulsanti rispetto al contenitore */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:50px;
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
  left: 300px; /* Avvicina la freccia sinistra */
}

button.right {
  right:300px; /* Avvicina la freccia destra */
}

/* Media query per schermi più piccoli */
@media (max-width: 991px) {
  button.btn.btn-outline-secondary.position-absolute {
    width: 40px; /* Riduci ulteriormente dimensioni pulsanti */
    height: 40px;
    font-size: 20px;
  }

  button.left {
    left: -0px; /* Allinea la freccia sinistra per il mobile */
  }

  button.right {
    right: -0px; /* Allinea la freccia destra per il mobile */
  }
}

/* Per schermi molto piccoli (mobile stretto) */
@media (max-width: 576px) {
  button.btn.btn-outline-secondary.position-absolute {
    width: 30px; /* Riduci ulteriormente dimensioni */
    height: 30px;
    font-size: 16px;
  }

  button.left {
    left: -0px; /* Sposta la freccia sinistra */
  }

  button.right {
    right: -0px; /* Sposta la freccia destra */
  }

  img {
    width: 100%; /* Rendi l'immagine responsiva */
    height: auto; /* Mantieni proporzioni */
  }
}


</style>