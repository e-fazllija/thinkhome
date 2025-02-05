<template>
  <div class="page-content bg-white">

    <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
      <div class="container-fluid">
        <div class="dz-bnr-inr-entry">
          <h1>Dettaglio Immobile</h1>
          <!-- Breadcrumb Row -->
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
              <li class="breadcrumb-item">Dettaglio Immobile</li>
            </ul>
          </nav>
          <!-- Breadcrumb Row End -->
        </div>
      </div>
    </div>    
    <div v-if="loading" class="container">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
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

    <section v-if="!loading" class="content-inner-1 mt-2 pb-0" :style="`background-image: url(${bg2});`">
      <div class="container">
        <div class="section-head style-1">
          <h1> {{ item.Title }}</h1>
          <h1 class="sub-title text-primary"> € {{ item.Price.toString() .replace(/\B(?=(\d{3})+(?!\d))/g, ".")+ ",00" }}</h1>
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
        <div class="row">
          <div class="col-12">
            <h6 class="dz-title">
              <p><strong>Consulente: </strong> {{ item.Agent.Name }} {{
                item.Agent.LastName }} </p>
            </h6>
          </div>
          <div class="col-12">
            <p>Cod. 00{{ item.Id }}</p>
          </div>
          <div class="col-12">
            <h1 class="sub-title text-primary"> € {{ item.Price.toString()
               .replace(/\B(?=(\d{3})+(?!\d))/g, ".")+ ",00"}}</h1>
          </div>
          <div class="col-12">
            <h3><i class="fa fa-map-pin"></i> {{ item.Town }}, {{
              item.AddressLine }}</h3>
          </div>
          <div class="col-12">
            <h6> {{ item.Typology }}</h6>
          </div>
          <div class="col-lg-12 col-md-12 align-self-center aos-item">
            <h6><img src="@/assets/images/energy.png" style="max-width: 50px; max-height: 50px;" /> {{ item.EnergyClass
              }}
            </h6>
          </div>
          <div class="col-12">
            <p>
              {{ item.Description }}
            </p>
          </div>
        </div>
      </div>

        <div v-if="showVideo" id="videoModal" class="modal-dialog modal-lg modal-dialog-centered">
           <div class="modal-content">
             <button class="mfp-close" style="top: -23px" data-bs-dismiss="modal" aria-label="Close">
               <i class="ti-close"></i>
             </button>
             <iframe :src="videoEmbedUrl" height="100%" frameborder="0" allowfullscreen allow="autoplay"></iframe>
           </div>
        </div>
        <p></p>
        
        <div class="row mb-lg-5 mb-3">
             <div class="col-lg-4 icon-bx-wraper style-3 left">
                  <div class="icon-bx-sm bg-primary">
                   <span class="icon-cell"><i class="flaticon-telephone"></i></span>
                  </div>
              <div class="icon-content">
               <h4 class="title m-b5">Contatti</h4>
               <ul>
                <li><i class="las la-phone-volume"></i> +39 333/9123388</li>
                <li><i class="las la-phone-volume"></i> +39 06/95595263</li>
                <li><i class="las la-mail-bulk"></i> info@thinkhome.it</li>
               </ul>
              </div>
             </div>
         <div class="col-lg-4 icon-bx-wraper style-3 left">
           <div class="icon-bx-sm bg-primary">
             <span class="icon-cell"><i class="fa fa-calculator"></i></span>
            </div>
             <div class="icon-content">
               <h4 class="title m-b5">Scopri la rata del tuo mutuo</h4>
                 <a href="https://www.affida.credit/agente/5fca6411f21fd0352c0dc3ae" class="btn btn-primary">
                 Calcola Mutuo
                 </a>
              </div>
            </div>
          <div class="col-lg-4 col-md-12 m-b30 aos-item">
              <img src="@/assets/images/work/pic5.jpg" class="d-lg-block d-none" alt="" />
          </div>
        </div>
    </section>
    <section v-if="!loading" class="content-inner-1 pt-0 pb-0">
      <div class="container">
        <div class="contact-area aos-item mt-0">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-secondary">Richiedi Infromazioni</h6>
            <h2 class="title">Inserisci i dati</h2>
          </div>
          <form class="dz-form dzForm contact-bx" method="POST" @submit.prevent="submit()">
            <input type="hidden" class="form-control" name="dzToDo" value="Contact" />
            <div class="dzFormMsg"></div>
            <div class="row sp10">
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required placeholder="Nome *" v-model="formData.Name" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required placeholder="Cognome *"
                    v-model="formData.LastName" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Telefono" v-model="formData.Phone" />
                </div>
              </div>
              <div class="col-sm-6 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Cellulare" v-model="formData.MobilePhone" />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <input type="text" class="form-control" required placeholder="Email *" v-model="formData.FromEmail" />
                </div>
              </div>
              <div class="col-sm-12 m-b20">
                <div class="input-group">
                  <textarea rows="5" class="form-control" required placeholder="Messaggio *"
                    v-model="formData.Body"></textarea>
                </div>
              </div>
              <div v-if="loadingRequest" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div v-else class="col-sm-12 text-center">
                <button name="submit" type="submit" class="btn btn-primary btn-rounded">
                  Invia <i class="m-l10 fas fa-caret-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="content-inner-1 pt-1">
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
import bannerImg from '@/assets/images/banner/1920x700.jpg'
import CommonBanner from '@/elements/CommonBanner.vue'
import bg2 from '@/assets/images/background/bg2.png'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import axios from 'axios'
import Home3Accordian from '@/components/Home3Accordian.vue'
import work_pic1 from '@/assets/images/work/work-1/pic-13.jpg'
import Swal from 'sweetalert2'

export default defineComponent({
  components: { Lightgallery, Swiper, SwiperSlide, Home3Accordian, CommonBanner},
  setup() {
    return {
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
      loadingRequest: false,
      videoEmbedUrl: "",
      showVideo:false,
      videoUrl:"",
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
        Typology: "",
        VideoUrl:"",
        Photos: {
            Url: ""
        }
      },
      formData: {
        RequestType: "",
        PropertyType: "",
        Province: "",
        Location: "",
        Address: "",
        NumberRooms: "",
        NumberBedRooms: "",
        NumberServices: "",
        MQ: "",
        Garden: false,
        Terrace: false,
        Lift: false,
        Furnished: false,
        Heating: "",
        Box: "",
        Price: "",
        Information: "",
        Name: "",
        LastName: "",
        FromEmail: "",
        Subject: "",
        Body: "",
        Phone: "",
        MobilePhone: "",
        VideoUrl:"",
      }
    }
  },
  methods: {
    async submit() {
  this.loadingRequest = true;
  this.formData.Information = this.item.Id.toString();

  axios.post('https://thinkhomebe.azurewebsites.net/api/Generic/InformationRequest', this.formData)
    .then(async () => {
      this.loadingRequest = false;

      // Reset dei campi del form
      this.formData.Name = "";
      this.formData.LastName = "";
      this.formData.FromEmail = "";
      this.formData.Subject = "";
      this.formData.Body = "";
      this.formData.Phone = "";
      this.formData.MobilePhone = "";

      // Mostra messaggio di successo
      Swal.fire({
        title: "Richiesta inviata con successo",
        icon: "success"
      });
    })
    .catch((error) => {
      this.loadingRequest = false;
      Swal.fire({
        title: "Si è verificato un errore",
        icon: "error"  // Corretto l'icona "error" invece di "success"
      });
          console.log(error)
        })

    },
    async getItem() {
  const result = await axios.get("https://thinkhomebe.azurewebsites.net/api/RealEstateProperty/GetById?id=" + this.$route.params.id);
  
  this.item = result.data;
  this.photos = result.data.Photos;
  this.imgSelected = this.photos.length > 0 ? this.photos[0].Url : '';

  // Controlla se esiste un VideoUrl
  if (this.item.VideoUrl) {
    this.videoEmbedUrl = this.convertVideoUrl(this.item.VideoUrl);
    this.showVideo = true;
  } else {
    this.showVideo = false;
  }

  this.loading = false;
},

convertVideoUrl(url) {
  try {
    let videoId = "";

    // Cattura ID dai vari formati di link YouTube
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/, // Standard, Shorts e Embed
      /youtube\.com\/v\/([a-zA-Z0-9_-]+)/, // Formato vecchio
      /youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]+)/ // Link con parametri multipli
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        videoId = match[1];
        break;
      }
    }

    // Se non è stato trovato un ID, restituisce l'URL originale
    if (!videoId) {
      console.warn("Impossibile estrarre ID video da URL:", url);
      return url;
    }

    // Costruisce il link embed corretto
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error("Errore nella conversione dell'URL del video:", error);
    return "";
  }
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

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .row.mb-lg-5.mb-3 img {
    max-height: 400px;
    max-width: 400px;
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

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .row.mb-lg-5.mb-3 img {
    max-height: 400px;
    max-width: 400px;
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

.col-sm-12 {
  flex: 0 0 auto;
  width: 100%;
}

.row.mb-lg-5.mb-3 img {
  max-height: 400px;
  max-width: 400px;
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
.row.mb-lg-5.mb-3 {
  display: flex; /* Attiva Flexbox */
  justify-content: space-between; /* Distribuisce uniformemente gli elementi */
  align-items: stretch; /* Assicura che tutti gli elementi abbiano la stessa altezza */
  flex-wrap: wrap; /* Consente agli elementi di andare a capo su schermi piccoli */
  gap: 20px; /* Spazio tra gli elementi */
}

.row.mb-lg-5.mb-3 > .col-lg-4 {
  flex: 1 1 calc(33.333% - 20px); /* Ogni colonna occupa un terzo dello spazio disponibile */
  display: flex; /* Rende ogni colonna flessibile */
  box-sizing: border-box; /* Garantisce che padding e bordi non influiscano sulle dimensioni */
  min-height: 200px; /* Imposta un'altezza minima per uniformare le colonne */
  padding: 10px; /* (Facoltativo) Spazio interno per il contenuto */
  height: 100px;
}
@media (max-width: 768px) {
  .row.mb-lg-5.mb-3 {
    flex-direction: column; /* Dispone gli elementi verticalmente */
  }

  .row.mb-lg-5.mb-3 > .col-lg-4 {
    flex: 1 1 100%; /* Ogni colonna occupa il 100% della larghezza */
    min-height: auto; /* Rimuove l'altezza minima per un migliore adattamento */
    height: auto; /* Rende l'altezza dinamica in base al contenuto */
  }
}


</style>