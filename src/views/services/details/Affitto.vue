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
  <p>Vuoi affittare casa ma non sai da dove iniziare? Affidati a noi di Thinkhome! Offriamo un servizio completo e personalizzato, studiato per soddisfare tutte le tue esigenze.</p>
  <p><strong>Ricerca e selezione accurata dell'inquilino ideale:</strong> Garantiamo una rigorosa valutazione dei potenziali affittuari, verificando attentamente la loro solvibilità economica e referenze pregresse.</p>
  <p><strong>Visite guidate efficienti e professionali:</strong>Grazie a un'organizzazione accurata, garantiremo visite rapide e produttive. I nostri agenti saranno preparati a fornire tutte le informazioni necessarie sull'immobile e sul contesto circostante, rispondendo prontamente a ogni domanda.</p>
  <p><strong>Stesura di contratti d'affitto personalizzati e conformi alla legge:</strong>Redigeremo per te il contratto d'affitto conforme alla legge più adatto alla tua esigenza, garantendo la massima tutela legale e fiscale sia per il proprietario che per l'inquilino. Ci occuperemo anche della relativa registrazione presso gli enti preposti del contratto. </p>
  <h4 class="my-4">Affidandoci la gestione del tuo immobile, potrai godere di:</h4>
  <ul>
    <li><p><strong>• Massima redditività: </strong> Grazie alla nostra esperienza e alle nostre strategie di marketing, riusciremo a massimizzare il rendimento del tuo investimento.</p></li>
    <li><p><strong>• Assistenza continua: </strong> Saremo sempre a tua disposizione per qualsiasi necessità o domanda.</p></li>
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
                  src="@/assets/images/banner/bnr42.jpg"
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
  import Testimonial2 from '@/components/Testimonial2.vue'
  import bnr5 from '@/assets/images/banner/bnr40.jpg'
  import bg2 from '@/assets/images/background/bg2.png'
  import { RouterLink } from 'vue-router'
  import MainBanner3 from '@/components/MainBanner3.vue'
  
  export default defineComponent({
    name: 'affitto',
    components: { CommonBanner, Testimonial2, RouterLink, MainBanner3 },
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
  