<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <!-- <div class="dz-media"> -->
          <!-- <div class="img1 aos-item">
            <img src="@/assets/images/about/pic13.jpg" alt="" />
          </div>
          <div class="img2 aos-item">
            <img src="@/assets/images/about/pic14.jpg" alt="" />
          </div> -->
          <div class="img3 aos-item me-5">
            <img src="@/assets/images/about/pic16.jpg" alt="" />
          </div>
        <!-- </div> -->
      </div>
      <div class="col-lg-6 align-self-center">
        <div class="year-exp">
          <h2 class="year aos-item counter">15</h2>
          <h4 class="text aos-item">Anni di esperienza lavorativa</h4>
        </div>
        <p class="m-b30 aos-item">
          Con oltre 15 anni di esperienza nel settore immobiliare,
          la nostra società si distingue per la professionalità e l'affidabilità nella compravendita di immobili.
          Specializzati nell'intermediazione di case residenziali e immobili commerciali,
          offriamo soluzioni su misura per soddisfare le esigenze di ogni cliente. Inoltre,
          ci occupiamo di investimenti immobiliari, aiutando privati e aziende a identificare le migliori opportunità sul mercato.
          Il nostro team di esperti fornisce anche servizi di progettazione e consulenza edilizia,
          garantendo la massima qualità in ogni fase del progetto.
          Grazie alla nostra esperienza e alla nostra rete di contatti consolidata,
          siamo in grado di gestire ogni aspetto della transazione immobiliare,
          assicurando ai nostri clienti un servizio completo e personalizzato.
          Affidati a noi per realizzare il tuo progetto immobiliare con successo e serenità.
        </p>
        <ul>
    <li style="margin-top: 10px;">
        <h6 style="display: inline; margin-right: 10px;">Titolare:</h6>
        <span>Luca Procesi</span>
    </li>
    <li style="margin-top: 10px;">
        <h6 style="display: inline; margin-right: 10px;">Responsabile Amministrativo:</h6>
        <span>Marika Grimaldi</span>
    </li>
    <li style="margin-top: 10px;">
        <h6 style="display: inline; margin-right: 10px;">Coordinamento Pratiche Urbanistiche:</h6>
        <span>Cristina del prete</span>
    </li>
    <li style="display: flex; align-items: flex-start; margin-top: 10px;">
        <h6 style="margin-right: 10px;">Consulenti:</h6>
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
            <span>Pierluigi Minna</span>
            <span>Omar Verducci</span>
            <span>Luigi D'Arienzo</span>
            <span>Valerio Bonafede</span>
        </div>
    </li>
</ul>



        <!-- <div class="accordion dz-accordion about-faq" id="aboutFaq">
          <div class="accordion-item">
            <h4 class="accordion-header">
              <RouterLink
                to="?"
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#aboutOne"
                aria-expanded="true"
                aria-controls="aboutOne"
              >
                <i class="flaticon-crane"></i>
                Construction
                <span class="toggle-close"></span>
              </RouterLink>
            </h4>
            <div
              id="aboutOne"
              class="accordion-collapse collapse show"
              aria-labelledby="aboutOne"
              data-bs-parent="#aboutFaq"
            >
              <div class="accordion-body">
                <p class="m-b0">
                  Vivamus sed eleifend diam. Proin vel orci commodo nulla viverra feugiat nec quis
                  neque.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header">
              <RouterLink
                to="?"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#aboutTwo"
                aria-expanded="false"
                aria-controls="aboutTwo"
              >
                <i class="flaticon-interior-design"></i>
                Architecture
                <span class="toggle-close"></span>
              </RouterLink>
            </h4>
            <div
              id="aboutTwo"
              class="accordion-collapse collapse"
              aria-labelledby="aboutTwo"
              data-bs-parent="#aboutFaq"
            >
              <div class="accordion-body">
                <p class="m-b0">
                  Vivamus sed eleifend diam. Proin vel orci commodo nulla viverra feugiat nec quis
                  neque.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header">
              <RouterLink
                to="?"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#aboutThree"
                aria-expanded="false"
                aria-controls="aboutTwo"
              >
                <i class="flaticon-blueprint"></i>
                Interior
                <span class="toggle-close"></span>
              </RouterLink>
            </h4>
            <div
              id="aboutThree"
              class="accordion-collapse collapse"
              aria-labelledby="aboutThree"
              data-bs-parent="#aboutFaq"
            >
              <div class="accordion-body">
                <p class="m-b0">
                  Vivamus sed eleifend diam. Proin vel orci commodo nulla viverra feugiat nec quis
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'homeAbout',
  setup() {
    return {}
  },
  components: { RouterLink }
})
</script>

<style scoped></style>
