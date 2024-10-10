<template>
  <!-- <section class="section-full content-inner-1 about-bx5 over overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 aos-item">
          <div class="section-head style-2">
            <h6 class="sub-title text-primary">Services</h6>
            <h2 class="title">Frequently Asked Question</h2>
          </div>
          <div class="accordion dz-accordion accordion-sm style-1 mt-5" id="accordionFaq">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <RouterLink
                  to="?"
                  class="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  PROGETTAZIONI
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    Offriamo servizi di progettazione per nuovi edifici e ristrutturazioni.
                    Dall’ideazione alla realizzazione, gestiamo tutte le fasi progettuali,
                    garantendo soluzioni innovative e funzionali.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  EDILIZIA
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    Coordiniamo cantieri edili, dal recupero di edifici a nuove costruzioni.
                    Gestione pratiche tecniche, permessi,
                    e supervisione lavori per garantire qualità e conformità.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <RouterLink
                  to="?"
                  class="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  INVESTIMENTI
                  <span class="toggle-close"></span>
                </RouterLink>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFaq"
              >
                <div class="accordion-body">
                  <p class="m-b0">
                    Consulenza specializzata per investimenti nel settore immobiliare,
                    inclusi acquisti all’asta.
                    Analisi di mercato e opportunità per massimizzare il rendimento del tuo capitale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
            <div class="img1 aos-item">
              <img src="@/assets/images/about/pic8.jpg" alt="" />
            </div>
            <div class="img2 aos-item">
              <img src="@/assets/images/about/pic9.jpg" alt="" />
            </div>
            <div class="img3 aos-item">
              <img src="@/assets/images/about/pic10.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="content-inner-2" :style="`background-image: url(${bg1});`">
      <div class="container">
        <div class="row section-head-bx align-items-center">
          <div class="col-md-8">
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">IL NOSTRO PORTAFOGLIO</h6>
              <h2 class="title">ULTIMI PROGETTI</h2>
            </div>
          </div>
          <!-- <div class="col-md-4 text-start text-md-end mb-4 mb-md-0">
            <RouterLink to="/portfolio" class="btn-link"
              >See All Projects <i class="fas fa-plus scale08"></i
            ></RouterLink>
          </div> -->
        </div>
      </div>
      <!-- <OurPortfolio /> -->
    </section>
  <OurPortfolio />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OurPortfolio from '@/components/OurPortfolio.vue'
import bg1 from '@/assets/images/background/bg1.png'

export default defineComponent({
  name: 'accordian_',
  components: {OurPortfolio },

  setup() {
    return {bg1}
  }
})
</script>

<style scoped></style>
