<template>
  <div class="page-content bg-white">
    <!-- Banner Header -->
    <CommonBanner :img="bannerImg" title="Dettaglio Immobile" text="Dettaglio Immobile" />

    <!-- Loading State -->
    <div v-if="loading" class="details-loading">
      <div class="details-spinner-container">
        <div class="details-spinner" role="status">
          <div class="spinner-border" role="status">
            <span class="sr-only">Caricamento...</span>
          </div>
          <p class="details-loading-text">Caricamento in corso...</p>
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

    <!-- Property Content -->
    <section v-if="!loading" class="content-inner-1 mt-2 pb-0">
      <!-- Property Header -->
      <div class="property-header">
        <div class="container">
          <h1 class="property-title">{{ item.Title }}</h1>
          <div class="property-price-section">
            <h2 class="property-price">
              <template v-if="item.Price === -1">
                Trattativa riservata
              </template>
              <template v-else-if="item.PriceReduced && item.PriceReduced > 0">
                <span>€ {{ item.PriceReduced.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00</span>
                <small class="property-price-old d-block">
                  € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00
                </small>
              </template>
              <template v-else>
                <span :class="{ 'property-price-old': item.Sold }">
                  € {{ item.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }},00
                </span>
              </template>
            </h2>
            <span v-if="item.Sold" class="property-badge sold">Venduto</span>
            <span v-if="!item.Sold && item.Negotiation" class="property-badge negotiation">In Trattativa</span>
          </div>
          <p class="property-code">Cod. 00{{ item.Id }}</p>
        </div>
      </div>

      <!-- Gallery Section -->
      <div v-if="item && photos.length > 0" class="details-gallery container-fluid">
        <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">
          <Swiper class="swiper-container swiper-portfolio lightgallery aos-item" :slides-per-view="3"
            :space-between="30" :loop="true" :breakpoints="{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 2 },
              240: { slidesPerView: 1 }
            }" :modules="module" :autoplay="{ delay: 1500 }" :speed="1500">
            <SwiperSlide class="swiper-slide" v-for="({ Url }, ind) in photos" :key="ind">
              <div class="dz-box overlay style-1">
                <div class="dz-media">
                  <img :src="Url" :alt="`Foto immobile ${ind + 1}`" />
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
      <!-- Address & Actions -->
      <div class="container property-info-section">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-3">
            <div class="property-address-card">
              <div class="property-address-icon">
                <i class="flaticon-placeholder"></i>
              </div>
              <h4 class="property-address-title">Indirizzo</h4>
              <p class="property-address-text">
                {{ item.AddressLine }}<br>
                {{ item.Town }} - {{ item.PostCode }}<br>
                {{ item.State }}
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 mb-3">
            <div class="property-actions">
              <button class="property-action-btn" @click="shareProperty" aria-label="Condividi annuncio">
                <i class="fa fa-share-alt"></i>
                Condividi
              </button>
              <button class="property-action-btn" @click="printAnnuncio" aria-label="Stampa annuncio">
                <i class="fa fa-print"></i>
                Stampa Annuncio
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Features Grid -->
      <div class="container">
        <div class="property-features">
          <div class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fa fa-bed"></i>
            </div>
            <p class="property-feature-text">{{ item.Bedrooms }} Camere</p>
          </div>
          <div class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fa fa-home"></i>
            </div>
            <p class="property-feature-text">{{ item.CommercialSurfaceate }} m²</p>
          </div>
          <div v-if="item.ParkingSpaces" class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fa fa-car"></i>
            </div>
            <p class="property-feature-text">{{ item.ParkingSpaces }} Posti Auto</p>
          </div>
          <div v-if="item.MQGarden" class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fa fa-tree"></i>
            </div>
            <p class="property-feature-text">Giardino {{ item.MQGarden }} m²</p>
          </div>
          <div v-if="item.Heating" class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fa fa-thermometer-empty"></i>
            </div>
            <p class="property-feature-text">{{ item.Heating }}</p>
          </div>
          <div class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fas fa-bath"></i>
            </div>
            <p class="property-feature-text">{{ item.Bathrooms }} {{ Number(item.Bathrooms) === 1 ? 'Bagno' : 'Bagni' }}</p>
          </div>
          <div v-if="item.EnergyClass" class="property-feature-item">
            <div class="property-feature-icon">
              <i class="fa fa-fire"></i>
            </div>
            <p class="property-feature-text">Classe {{ item.EnergyClass }}</p>
          </div>
        </div>
      </div>

      <!-- Agent Info -->
      <div class="container" v-if="item.Agent">
        <div class="property-agent-info">
          <p class="property-agent-name">
            <strong>Consulente:</strong> {{ item.Agent.Name }} {{ item.Agent.LastName }}
          </p>
        </div>
      </div>

      <!-- Property Details -->
      <div class="container">
        <div class="property-details-section">
          <h3 class="property-details-title">Descrizione</h3>
          <div class="property-details-content" v-html="item.Description.replace(/\n/g, '<br>')"></div>
          <div v-if="item.Typology" class="mt-3 details-text-muted">
            <strong>Tipologia:</strong> {{ item.Typology }}
          </div>
        </div>
      </div>

      <!-- Video Section -->
      <div v-if="showVideo" class="container">
        <div class="details-video-modal">
          <button class="details-video-close" @click="showVideo = false" aria-label="Chiudi video">
            <i class="ti-close"></i>
          </button>
          <iframe 
            :src="videoEmbedUrl" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>
      </div>
      <!-- Contact Cards -->
      <div class="container">
        <div class="property-contact-section">
          <div class="contact-card">
            <div class="contact-card-icon">
              <i class="flaticon-telephone"></i>
            </div>
            <h4 class="contact-card-title">Contatti</h4>
            <ul class="contact-card-list">
              <li><i class="las la-phone-volume"></i> +39 333/9123388</li>
              <li><i class="las la-phone-volume"></i> +39 06/95595263</li>
              <li><i class="las la-mail-bulk"></i> info@thinkhome.it</li>
            </ul>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">
              <i class="fa fa-calculator"></i>
            </div>
            <h4 class="contact-card-title">Scopri la rata del tuo mutuo</h4>
            <a href="https://www.affida.credit/agente/5fca6411f21fd0352c0dc3ae" class="contact-card-btn" target="_blank" rel="noopener">
              Calcola Mutuo
            </a>
          </div>
          <div class="contact-card d-lg-block d-none">
            <img src="@/assets/images/work/pic5.jpg" alt="ThinkHome" />
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form Section -->
    <section v-if="!loading" class="content-inner-1 pt-0 pb-0">
      <div class="container">
        <div class="property-form-section">
          <div class="section-head style-1 text-center">
            <h6 class="sub-title text-secondary">Richiedi Informazioni</h6>
            <h2 class="property-form-title">Inserisci i dati</h2>
            <p class="property-form-subtitle">Compila il modulo per ricevere informazioni dettagliate sull'immobile</p>
          </div>
          <form class="property-form dz-form dzForm contact-bx" method="POST" @submit.prevent="submit()">
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
                  <input type="email" class="form-control" required placeholder="Email *" v-model="formData.FromEmail" />
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
                <button name="submit" type="submit" class="property-form-btn" :disabled="!acceptPrivacy">
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
import '@/assets/css/details-page.css'

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

        // Ottiene l'origin del sito corrente per il parametro origin richiesto da YouTube
        const origin = window.location.origin;
        
        // Costruisce il link embed corretto con parametri necessari per evitare l'errore 153
        // origin: necessario per la sicurezza CORS quando il sito è pubblicato online
        // enablejsapi=1: abilita l'API JavaScript di YouTube
        // rel=0: nasconde i video correlati
        // modestbranding=1: riduce i branding di YouTube
        return `https://www.youtube.com/embed/${videoId}?origin=${encodeURIComponent(origin)}&enablejsapi=1&rel=0&modestbranding=1`;
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