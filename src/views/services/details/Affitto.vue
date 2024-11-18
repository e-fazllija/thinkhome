<template>
    <div class="page-content bg-white">
      <CommonBanner :img="bnr5" title="Immobili in affitto" text="Immobili in affitto" />
      <!-- <section class="content-inner-2">
        <div class="container-fluid">
          <Testimonial2 />
        </div>
      </section>
      <Brands /> -->
    </div>
    <section class="content-inner-3">
        <div class="container">
          <div class="row align-items-center about-bx4">
            <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
              <div class="section-head style-2">
                <!-- <h6 class="sub-title text-primary">About Us</h6> -->
                <h2 class="title m-b20">Affitta il tuo immobile.</h2>
  <p>Affidandoti a noi per la gestione del tuo immobile in affitto, potrai contare su un servizio completo e su misura per le tue esigenze. Ecco cosa offriamo:</p>
  <ul>
    <li><p><strong>• Ricerca dell'inquilino ideale:</strong> Selezioneremo accuratamente i potenziali inquilini, verificando la loro solvibilità e affidabilità.</p></li>
    <li><p><strong>• Gestione delle visite:</strong> Organizzeremo visite guidate con i potenziali inquilini, rispondendo a tutte le loro domande e fornendo loro tutte le informazioni necessarie.</p></li>
    <li><p><strong>• Stesura del contratto d'affitto:</strong> Redigeremo un contratto d'affitto conforme alla legge, tutelando i tuoi diritti e quelli dell'inquilino.</p></li>
    <li><p><strong>• Gestione delle manutenzioni:</strong> Ci occuperemo della gestione delle manutenzioni ordinarie e straordinarie dell'immobile, garantendo sempre la massima efficienza.</p></li>
    <li><p><strong>• Riscossione dei canoni:</strong> Provvederemo alla riscossione puntuale dei canoni di affitto e alla gestione di eventuali morosità.</p></li>
  </ul>
  <h4 class="my-4">Scegliendo il nostro servizio di affitto, potrai beneficiare di:</h4>
  <ul>
    <li><p><strong>• Tranquillità e serenità:</strong> Potrai delegare a noi tutte le incombenze legate alla gestione dell'affitto, potendoti così dedicare ad altro.</p></li>
    <li><p><strong>• Massima redditività:</strong> Grazie alla nostra esperienza e alle nostre strategie di marketing, riusciremo a massimizzare il rendimento del tuo investimento.</p></li>
    <li><p><strong>• Assistenza continua:</strong> Saremo sempre a tua disposizione per qualsiasi necessità o domanda.</p></li>
  </ul>
              </div>
              <!-- <RouterLink to="/blog-details" class="btn btn-primary btn-rounded hover-icon">
                <span>READ MORE</span>
                <i class="fas fa-arrow-right"></i>
              </RouterLink> -->
            </div>
            <div class="col-lg-6 m-b30">
              <div class="dz-media">
                <img
                  src="@/assets/images/banner/bnr33.jpg"
                  alt=""
                  class="img1 aos-item aos-init aos-animate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import CommonBanner from '@/elements/CommonBanner.vue'
  import Brands from '@/elements/Brands.vue'
  import Testimonial2 from '@/components/Testimonial2.vue'
  import bnr5 from '@/assets/images/banner/bnr35.jpg'
  import bg2 from '@/assets/images/background/bg2.png'
  import { RouterLink } from 'vue-router'
  import MainBanner3 from '@/components/MainBanner3.vue'
  
  export default defineComponent({
    name: 'affitto',
    components: { CommonBanner, Testimonial2, Brands, RouterLink, MainBanner3 },
    setup() {
      return { bnr5, bg2 }
    },
    data() {
      return {       
      }
    }
  })
  </script>
  
  <style scoped></style>
  