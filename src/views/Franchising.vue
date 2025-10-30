<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bannerImg" title="Franchising" text="Franchising" />
    <section class="section-full content-inner">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-6">
            <div class="franchising-hero mb-4">
              <img :src="franchisingHero" alt="ThinkHome Franchising" class="franchising-hero__img" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="franchising-content">
              <div class="franchising-text mb-5">
                
                <div class="main-text text-center">
                  <p class="franchising-intro">
                    Entra nel franchising <strong class="brand-name">Think Home</strong>, hai tutto il necessario per far crescere la tua agenzia: un metodo operativo testato, formazione continua, strumenti digitali avanzati, marketing pronto all'uso e totale libertà gestionale.
                  </p>
                </div>
                
                <div class="franchising-features mt-4">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <span class="feature-icon me-3">📍</span>
                        <span>Nessun limite territoriale</span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <span class="feature-icon me-3">📣</span>
                        <span>Nessun vincolo pubblicitario</span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <span class="feature-icon me-3">🤝</span>
                        <span>Collaborazioni MLS e convenzioni professionali</span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <span class="feature-icon me-3">📈</span>
                        <span>Supporto reale per far decollare il tuo business</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="contact-info text-center mt-5">
                  <p class="mb-3">
                    <strong>Vuoi sapere la quota mensile per avere tutto questo?</strong>
                  </p>
                  <p>
                    Scrivici o chiamaci <strong>333 9123 388</strong> - <strong>Info@thinkhome.it</strong> - <strong>0695595263</strong>
                  </p>
                </div>
              </div>

              <!-- Franchising Images Gallery -->
              <div class="franchising-gallery">
                <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4" v-for="(image, index) in franchisingImages" :key="index">
                    <div class="gallery-item">
                      <img :src="image" :alt="`Franchising ${index + 1}`" class="img-fluid rounded shadow-sm" />
                    </div>
                  </div>
                </div>
                
                <!-- Immagine 9 come ultima immagine singola -->
                <div class="row mt-4">
                  <div class="col-12 text-center">
                    <div class="single-image">
                      <img :src="franchising9" alt="Franchising - Immagine finale" class="img-fluid rounded shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import CommonBanner from '@/elements/CommonBanner.vue'
import { defineComponent } from 'vue'
import bannerImg from '@/assets/images/TH-pittogramma-banner.jpg'

// Import franchising images
import franchising1 from '@/assets/images/franchising/1.jpeg'
import franchising2 from '@/assets/images/franchising/2.jpeg'
import franchising3 from '@/assets/images/franchising/3.jpeg'
import franchising4 from '@/assets/images/franchising/4.jpeg'
import franchising5 from '@/assets/images/franchising/5.jpeg'
import franchising6 from '@/assets/images/franchising/6.jpeg'
import franchising7 from '@/assets/images/franchising/7.jpeg'
import franchising8 from '@/assets/images/franchising/8.jpeg'
import franchising9 from '@/assets/images/franchising/9.jpeg'
import franchising10 from '@/assets/images/franchising/10.jpeg'
import franchising11 from '@/assets/images/franchising/11.jpeg'
import franchisingHero from '@/assets/images/TH-4.jpg'
import '@/assets/css/franchising.css'

export default defineComponent({
  name: 'franchising',
  setup() {
    const franchisingImages = [
      franchising1,
      franchising2,
      franchising3,
      franchising4,
      franchising6,
      franchising11
    ]

    return {
      bannerImg,
      franchisingImages,
      franchising9,
      franchisingHero
    }
  },
  components: { CommonBanner }
})
</script>

<style scoped>
.franchising-content {
  padding: 60px 0;
}

.main-text {
  margin-bottom: 40px;
}

.franchising-intro {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 0;
  padding: 20px;
  background: rgba(0, 123, 255, 0.05);
  border-radius: 10px;
  border-left: 4px solid #007bff;
}

.brand-name {
  color: #007bff;
  font-weight: 700;
}

.franchising-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .franchising-intro {
    font-size: 1.3rem;
    padding: 15px;
  }
}

.feature-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 15px;
}

.feature-icon {
  font-size: 1.5rem;
  width: 40px;
  text-align: center;
}

.contact-info {
  background: #e8f5e8;
  padding: 30px;
  border-radius: 10px;
  border-left: 5px solid #28a745;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.franchising-gallery {
  margin-top: 50px;
}

.single-image {
  max-width: 600px;
  margin: 0 auto;
}

.single-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}
</style>
