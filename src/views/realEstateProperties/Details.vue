<template>
  <div class="page-content bg-white">

    <div class="dz-bnr-inr style-1 overlay-left" style="background-color: #25606f">
      <div class="container-fluid">
        <div class="dz-bnr-inr-entry">
          <h1>Dettaglio Immobile</h1>
          <!-- Breadcrumb Row -->
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
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
          <h1 class="sub-title text-primary">
            <template v-if="item.Price === -1">
                <span>Trattativa riservata</span>
            </template>
            <template v-else-if="item.PriceReduced && item.PriceReduced > 0">
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
    <div class="col-md-4">
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
    <div class="col-md-4">
      <div class="icon-bx-wraper style-7 left m-b30 gap-3">
          <button class="btn btn-primary"   @click="shareProperty" aria-label="Condividi annuncio"
          style="background-color: #3d6871;  color: white; border-radius: 10px; padding: 10px 30px;">
                 <i class="fa fa-share-alt"></i></button>

          <button class="btn btn-primary" @click="printAnnuncio" aria-label="Stampa annuncio"
          style="background-color: #3d6871;  color: white; border-radius: 10px; padding: 10px 30px;">
          <i class="fa fa-print"> Stampa Annuncio</i> 
      </button>
      </div>
    </div>
    <div class="col-md-4">
    </div>
  </div>
      </div>
      <div class="container">
        <div class="row mt-5">
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-bed me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">{{ item.Bedrooms }} Camere</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-home  me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">{{ item.CommercialSurfaceate }}m²</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-car me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">{{ item.ParkingSpaces }} Posti Auto</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 40%;">
              <i class="fa fa-tree me-2" style="font-size: 50px;"></i>
              <strong style="font-size: 12px">Mq: {{ item.MQGarden }} </strong>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5">
          <div class="col-3">
            <div class="feature-item me-2" style="display: flex; align-items: center; width: 30%;">
              <i class="fa fa-thermometer-empty" style="font-size: 30px; margin-right: 8px;"></i>
              <strong style="font-size: 12px">Riscaldamento {{ item.Heating }}</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
              <i class="fas fa-bath me-2" style="font-size: 30px; margin-right: 8px;"></i>
              <strong style="font-size: 12px">{{ item.Bathrooms }} Bagno</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
              <i class="fa fa-fire me-2" aria-hidden="true" style="font-size: 30px; margin-right: 8px;"></i>
              <strong style="font-size: 12px">Classe Energetica {{ item.EnergyClass }}</strong>
            </div>
          </div>
          <div class="col-3">
            <div class="feature-item" style="display: flex; align-items: center; width: 30%;">
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
            <h1 class="sub-title text-primary">
              <template v-if="item.Price === -1">
                Trattativa riservata
              </template>
              <template v-else>
                € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00" }}
              </template>
            </h1>
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
            <p v-html="item.Description.replace(/\n/g, '<br>')">
            </p>
          </div>
        </div>
      </div>

      <div v-if="showVideo" id="videoModal" class="modal-dialog modal-lg modal-dialog-centered mb-5">
        <div class="modal-content">
          <button class="mfp-close" style="top: -23px" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti-close"></i>
          </button>
          <iframe :src="videoEmbedUrl" height="100%" frameborder="0" allowfullscreen allow="autoplay"></iframe>
        </div>
      </div>
      
      <div class="container">
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
              <div class="col-sm-12 m-b20">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="privacyCheckbox" v-model="acceptPrivacy" required />
              <label class="form-check-label" for="privacyCheckbox">
                Accetto il trattamento dei dati personali in conformità alla <RouterLink to="/privacy-policy">Privacy Policy</RouterLink> *
              </label>
            </div>
          </div>
              <div v-if="loadingRequest" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div v-else class="col-sm-12 text-center">
                <button name="submit" type="submit" class="btn btn-primary btn-rounded" :disabled="!acceptPrivacy">
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
import logoImage from '@/assets/images/work/pic5.jpg';
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import axios from 'axios'
import Home3Accordian from '@/components/Home3Accordian.vue'
import work_pic1 from '@/assets/images/work/work-1/pic-13.jpg'
import Swal from 'sweetalert2'

export default defineComponent({
  components: { Lightgallery, Swiper, SwiperSlide, Home3Accordian, CommonBanner },
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
      showVideo: false,
      videoUrl: "",
      acceptPrivacy: false,
      photos: [{
        Url: ""
      }],
      item: {
        Id: 0,
        Title: "",
        Agent: { Name: "", LastName: "", Email: "", MobilePhoneNumber: "", Address:"", Town:"" },
        AddressLine: "",
        Town: "",
        PostCode: "",
        State: "",
        Price: 0,
        Sold: true,
        Negotiation: true,
        CommercialSurfaceate: "",
        ParkingSpaces: "",
        Heating: "",
        Bathrooms: "",
        EnergyClass: "",
        Bedrooms: "",
        Description: "",
        Typology: "",
        VideoUrl: "",
        MQGarden:0,
        PriceReduced:0,
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
        VideoUrl: "",
      }
    }
  },
  methods: {
    async submit() {
  // Verifica se la checkbox è selezionata
  if (!this.acceptPrivacy) {
    Swal.fire({
      title: "Devi accettare il trattamento dei dati personali.",
      icon: "warning"
    });
    return; 
  }

  this.loadingRequest = true;
  this.formData.Information = this.item.Id.toString();

  try {
    // Invia la richiesta con Axios
    await axios.post('https://thinkhomebe.azurewebsites.net/api/Generic/InformationRequest', this.formData);
    
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
  } catch (error) {
    this.loadingRequest = false;
    Swal.fire({
      title: "Si è verificato un errore",
      icon: "error"
    });
    console.log(error);
  } finally {
    this.loadingRequest = false;
  }
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

    convertVideoUrl(url: string) {
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

    printAnnuncio() {
  const printWindow = window.open('', '', 'width=900,height=650');
  if (!printWindow) return;

  // Prepara fino a 2 foto per la stampa
  const displayPhotos = this.photos.slice(0, 2);
  const mainPhoto = this.photos[0]?.Url || 'placeholder.jpg';
  const secondPhoto = this.photos[1]?.Url || null;

  // QR Code per i contatti
  const propertyUrl = `https://www.thinkhome.it/dettaglio/${this.item.Id}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=10&data=${encodeURIComponent(propertyUrl)}`;

  // Limita la lunghezza della descrizione
  const maxDescriptionLength = 1000;
  let truncatedDescription = this.item.Description;
  if (this.item.Description.length > maxDescriptionLength) {
    truncatedDescription = this.item.Description.substring(0, maxDescriptionLength) + ' [...]';
  }

  const agentInfo = `
    <div style="margin-top: 20px; border-top: 1px solid #e0e0e0; padding-top: 15px;">
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
        <!-- Dettagli Agente -->
        <div style="flex: 1; min-width: 60%;">
          <p style="margin: 5px 0;"><strong>${this.item.Agent.Name} ${this.item.Agent.LastName}</strong></p>
          <p style="margin: 5px 0; font-size: 14px;">
            <i class="fas fa-map-marker-alt" style="color: #c0a480; width: 15px;"></i> 
            ${this.item.Agent.Address || 'Via Roma, 123 - 00100 Roma'}, ${this.item.Agent.Town}
          </p>
          <p style="margin: 5px 0; font-size: 14px;">
            <i class="fas fa-phone" style="color: #c0a480; width: 15px;"></i> 
            ${this.item.Agent.MobilePhoneNumber || '+39 333 9123388'}
          </p>
          <p style="margin: 5px 0; font-size: 14px;">
            <i class="fas fa-envelope" style="color: #c0a480; width: 15px;"></i> 
            ${this.item.Agent.Email || 'info@thinkhome.it'}
          </p>
        </div>
      </div>
    </div>
  `;

  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Annuncio - ${this.item.Title}</title>
      <style>
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        @page {
          size: A4;
          margin: 15mm 10mm;
        }
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.4; 
          color: #333; 
          margin: 0; 
          padding: 0;
          width: 100%;
          max-width: 210mm;
        }
        .main-container {
          border: 10px solid #3d6871;
          border-radius: 5px;
          padding: 5mm;
          background: white;
          width: calc(100% - 5mm);
          margin: 0 auto;
          box-sizing: border-box;
          min-height: 270mm;
        }
        .print-container { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 15px;
          width: 100%;
          height: calc(100% - 50px);
        }
        .left-column {
          flex: 0 0 40%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .right-column {
          flex: 1;
          min-width: 50%;
          display: flex;
          flex-direction: column;
        }
        .photo-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }
        .photo-grid img { 
          width: 100%; 
          height: auto;
          max-height: 180px;
          object-fit: cover;
          border-radius: 3px;
          border: 1px solid #e0e0e0;
        }
        .property-title { 
          color: #25606f; 
          font-size: 18px; 
          margin: 0 0 8px 0;
        }
        .property-price { 
          color: #c0a480; 
          font-size: 16px; 
          font-weight: bold; 
          margin: 8px 0;
        }
        .property-code { 
          font-size: 12px; 
          color: #666; 
          margin-bottom: 12px;
        }
        .property-address { 
          font-size: 14px; 
          margin: 12px 0; 
          color: #444;
        }
        .property-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0;
        }
        .feature-item {
          background: #f5f5f5;
          padding: 6px 10px;
          border-radius: 3px;
          font-size: 12px;
          border: 1px solid #e0e0e0;
        }
        .property-description {
          margin: 15px 0;
          font-size: 13px;
          line-height: 1.5;
          flex-grow: 1;
          max-height: calc(60% - 380px);
          overflow: hidden;
          position: relative;
        }
        .description-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .continue-badge {
          background: #3d6871;
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          margin-bottom: 5px;
        }
        .logo-container {
          text-align: center; 
          margin-bottom: 15px;
        }
        .logo-container img {
          max-height: 25mm;
          width: auto;
        }
        .qr-code-container {
          text-align: center;
          margin-top: 10px;
          padding: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
        }
        .qr-code-container img {
          width: 100px;
          height: 100px;
        }
        .qr-code-container p {
          font-size: 12px;
          margin-top: 5px;
        }
@media print {
  body {
    background: white !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .main-container {
    border: 8px solid #3d6871 !important;
    padding: 8mm !important;
    box-shadow: none !important;
    min-height: auto !important;
    max-height: 300mm !important; /* Limite massimo A4 */
    height: 100%; 
    box-sizing: border-box;
    overflow: hidden; /* Evita che esca fuori */
    page-break-inside: avoid !important; /* NON spezzare dentro */
  }
  .print-container, .left-column, .right-column {
    page-break-inside: avoid !important;
    overflow: hidden;
  }
}
  .no-print {
  display: block;
  margin: 15px auto;
  padding: 8px 16px;
  background: #3d6871;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
}

@media print {
  .no-print {
    display: none !important;
  }
}

      </style>
    </head>
    <body>
      <div class="main-container">
        <div class="logo-container">
          <img src="${logoImage}" alt="Logo" />
        </div>
        
        <div class="print-container">
          <!-- Colonna Sinistra (Foto + QR Code) -->
          <div class="left-column">
            <div class="photo-grid">
              <img src="${mainPhoto}" alt="Foto principale">
              ${secondPhoto ? `<img src="${secondPhoto}" alt="Foto secondaria">` : ''}
            </div>
            

            <!-- Caratteristiche Immobile -->
            <div style="background: #f9f9f9; padding: 12px; border-radius: 4px; border: 1px solid #e0e0e0;">
              <h4 style="margin-top: 0; color: #25606f; border-bottom: 1px solid #ddd; padding-bottom: 4px; font-size: 15px;">Dettagli</h4>
              <div class="property-features">
                <div class="feature-item"><i class="fas fa-ruler-combined"></i> ${this.item.CommercialSurfaceate} m²</div>
                <div class="feature-item"><i class="fas fa-bed"></i> ${this.item.Bedrooms} camere</div>
                <div class="feature-item"><i class="fas fa-bath"></i> ${this.item.Bathrooms} bagni</div>
                ${this.item.ParkingSpaces ? `<div class="feature-item"><i class="fas fa-car"></i> ${this.item.ParkingSpaces} auto</div>` : ''}
                ${this.item.MQGarden ? `<div class="feature-item"><i class="fas fa-tree"></i> Giardino (${this.item.MQGarden} m²)</div>` : ''}
                ${this.item.Heating ? `<div class="feature-item"><i class="fas fa-fire"></i> ${this.item.Heating}</div>` : ''}
                <div class="feature-item"><i class="fas fa-certificate"></i> Classe ${this.item.EnergyClass}</div>
              </div>
            <!-- QR Code -->
            <div class="qr-code-container">
              <img src="${qrCodeUrl}" alt="Vedi annuncio online">
              <p>Scansiona per vedere l'annuncio</p>
            </div>
            </div>
          </div>
          
          <!-- Colonna Destra (Dettagli) -->
          <div class="right-column">
            <h1 class="property-title">${this.item.Title}</h1>
            <div class="property-price">
              ${this.item.Price === -1 ? 'Trattativa riservata' : 
                `€ ${this.item.Price.toLocaleString('it-IT')},00
                ${this.item.PriceReduced > 0 ? `<br><small style="text-decoration: line-through; color: #777;">€ ${this.item.PriceReduced.toLocaleString('it-IT')},00</small>` : ''}`
              }
            </div>
            <div class="property-code">Codice:00${this.item.Id}</div>
            <div class="property-address">
              <i class="fas fa-map-marker-alt"></i> ${this.item.AddressLine}, ${this.item.Town} (${this.item.PostCode})
            </div>
            
            <div class="property-description" style="max-height:180px; overflow:hidden; position:relative;">
              ${truncatedDescription.replace(/\n/g, '<br>')} 
              ${this.item.Description.length > maxDescriptionLength ? `
                <div class="description-fade">
                  <span class="continue-badge">[...]</span>
                </div>
              ` : ''}
            </div>
            
            <!-- Sezione Agente -->
            ${agentInfo}
          </div>
        </div>
        
        <!-- Pulsante Stampa (visibile solo in anteprima) -->
<button class="no-print" onclick="window.print()">
  <i class="fas fa-print"></i> Stampa Annuncio
</button>
      </div>
    </body>
    </html>
  `;

  printWindow.document.write(content);
  printWindow.document.close();
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
  shareProperty() {
      const propertyUrl = window.location.href; // Ottieni l'URL della pagina corrente
      if (navigator.share) {
        // Utilizza l'API Web Share se supportata
        navigator.share({
          title: 'Dettaglio Immobile',
          url: propertyUrl
        })
        .then(() => console.log('Condivisione avvenuta con successo'))
        .catch((error) => console.error('Errore durante la condivisione', error));
      } else {
        // Fallback per browser che non supportano l'API Web Share
        navigator.clipboard.writeText(propertyUrl)
          .then(() => {
            Swal.fire({
              title: 'Link copiato negli appunti!',
              icon: 'success'
            });
          })
          .catch((error) => {
            console.error('Errore durante la copia del link', error);
            Swal.fire({
              title: 'Errore durante la copia del link',
              icon: 'error'
            });
          });
      }
    }
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
  display: flex;
  /* Attiva Flexbox */
  justify-content: space-between;
  /* Distribuisce uniformemente gli elementi */
  align-items: stretch;
  /* Assicura che tutti gli elementi abbiano la stessa altezza */
  flex-wrap: wrap;
  /* Consente agli elementi di andare a capo su schermi piccoli */
  gap: 20px;
  /* Spazio tra gli elementi */
}

.row.mb-lg-5.mb-3>.col-lg-4 {
  flex: 1 1 calc(33.333% - 20px);
  /* Ogni colonna occupa un terzo dello spazio disponibile */
  display: flex;
  /* Rende ogni colonna flessibile */
  box-sizing: border-box;
  /* Garantisce che padding e bordi non influiscano sulle dimensioni */
  min-height: 200px;
  /* Imposta un'altezza minima per uniformare le colonne */
  padding: 10px;
  /* (Facoltativo) Spazio interno per il contenuto */
  height: 100px;
}

@media (max-width: 768px) {
  .row.mb-lg-5.mb-3 {
    flex-direction: column;
    /* Dispone gli elementi verticalmente */
  }

  .row.mb-lg-5.mb-3>.col-lg-4 {
    flex: 1 1 100%;
    /* Ogni colonna occupa il 100% della larghezza */
    min-height: auto;
    /* Rimuove l'altezza minima per un migliore adattamento */
    height: auto;
    /* Rende l'altezza dinamica in base al contenuto */
  }
}
</style>