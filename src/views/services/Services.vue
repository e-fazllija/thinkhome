<template>
  <div
    class="modal fade"
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <button class="mfp-close" style="top: -23px" data-bs-dismiss="modal" aria-label="Close">
          <i class="ti-close"></i>
        </button>
        <iframe
          height="100%"
          src="https://www.youtube.com/embed/sNCv3_NTNtU"
          frameborder="0"
          allowfullscreen
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </div>

  <div class="page-content bg-white">
    <CommonBanner :img="bnr6" title="I Nostri Servizi" text="I Nostri Servizi" />
    <section
      class="section-full content-inner"
      :style="`background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-sm-6 aos-item"
            v-for="({ id, icon, title, description }, ind) in servicesArr"
            :key="ind"
          >
            <div class="icon-bx-wraper style-3 m-b30">
              <div class="icon-xl m-b30">
                <RouterLink to="?" class="icon-cell"><i :class="icon"></i></RouterLink>
              </div>
              <div class="icon-content">
                <h4 class="title m-b10">
                  <RouterLink :to="{ name: 'services_details', params: { id: 1 }}">{{ title }}</RouterLink>
                </h4>
                <p class="m-b30">
                 {{ description }}
                </p>
                <RouterLink
                  :to="{ name: 'services_details', params: { id: id }}"
                  class="btn btn-primary btn-rounded btn-sm hover-icon"
                >
                  <span>Dettagli</span>
                  <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dz-content-bx style-3">
      <CounterVideo />
    </section>
    <!-- <section
      class="content-inner-2"
      :style="` background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <Testimonial />
    </section> -->
    <!-- <section
      class="content-inner-2"
      :style="`background-image: url(${bg1});
            background-position: left top;
            background-size: 100%;
            background-repeat: no-repeat;`"
    >
      <div class="container-fluid">
        <Testimonial2 />
      </div>
    </section> -->
    <HomeFaq />
    <section class="section-full dz-content-bx style-2 text-white">
      <div
        class="dz-content-inner bg-dark"
        :style="`background-image: url(${bg2_1}); background-position: center`"
      >
        <OurStrategy />
      </div>
    </section>
    <Brands />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import Brands from '@/elements/Brands.vue'
import CounterVideo from '@/components/CounterVideo.vue'
import Testimonial from '@/components/Testimonial.vue'
import Testimonial2 from '@/components/Testimonial2.vue'
import HomeFaq from '@/components/HomeFaq.vue'
import OurStrategy from '@/components/OurStrategy.vue'
import bnr6 from '@/assets/images/banner/bnr10.jpg'
import bg2 from '@/assets/images/background/bg2.png'
import bg1 from '@/assets/images/background/bg1.png'
import bg2_1 from '@/assets/images/background/bg2-1.png'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'services_',
  components: {
    CommonBanner,
    CounterVideo,
    Testimonial,
    Testimonial2,
    HomeFaq,
    OurStrategy,
    Brands,
    RouterLink
  },
  setup() {
    return {
      bnr6,
      bg2,
      bg1,
      bg2_1,
      servicesArr: [
        { id: 4, icon: 'flaticon-blueprint-1', title: 'SCIA - Segnalazione Certificata di Inizio Attività', description: "E' l'atto con cui le imprese possono iniziare, modificare o cessare un'attività produttiva (artigianale, commerciale, industriale); ciò avviene senza dover più attendere risposta e verifiche da parte degli enti competenti. La SCIA infatti produce effetti immediati ai sensi dell'art. 19 della legge 241/90." },
        { id: 5, icon: 'flaticon-crane', title: 'SCIA alternativa al PDC Permesso di Costruire (Ex DIA - Denuncia di Inizio Attività)', description: "È un atto amministrativo, la cui disciplina è contenuta nel Testo unico dell'edilizia della Repubblica italiana (decreto del presidente della Repubblica 6 giugno 2001 n. 380) che ne descrive il potere e i limiti agli artt. 22 e 23. Il suo utilizzo è per interventi di manutenzione straordinaria qualora riguardino ad esempio le parti strutturali dell'edificio o i prospetti." },
        { id: 6, icon: 'flaticon-interior-design-1', title: 'CILA - Comunicazione di inizio lavori asseverata', description: "Devi richiederla se dovrai eseguire interventi di manutenzione straordinaria e modifiche interne di carattere edilizio. Quando si vogliono eseguire le seguenti tipologie di lavori, previste dall'art. 6 del D.P.R 6 giugno 2001 n. 380 così come modificato dall'art. 5 del D.L 25 marzo 2010 n. 40 convertito in legge dalla L. 22 maggio 2010 n. 73 e ss.mm.ii." },
        { id: 7, icon: 'flaticon-furniture', title: 'Permesso di Costruire', description: "Cambio destinazione d'uso: nel linguaggio urbanistico si usa l'espressione destinazione d'uso per indicare l'insieme delle finalità e delle modalità di utilizzo di una costruzione edilizia. Alcune delle principali destinazioni d'uso sono: industriale, residenziale e commerciale. È possibile, per esempio, che si voglia trasformare un'abitazione in ufficio oppure il contrario." },
        { id: 8, icon: 'flaticon-home', title: "Cambio di destinazione d'uso", description: "Cambio destinazione d'uso: nel linguaggio urbanistico si usa l'espressione destinazione d'uso per indicare l'insieme delle finalità e delle modalità di utilizzo di una costruzione edilizia. Alcune delle principali destinazioni d'uso sono: industriale, residenziale e commerciale. È possibile, per esempio, che si voglia trasformare un'abitazione in ufficio oppure il contrario." },
        { id: 9, icon: 'flaticon-support', title: 'Conteggio tabelle millesimali', description: "Conteggio tabelle millesimali. Hai bisogno di effettuare il calcolo delle tabelle millesimali all'interno del tuo condominio? Affidati ai tecnici dello STUDIO TECNICO MAZZA. Le tabelle millesimali sono lo strumento attraverso il quale si individuano gli oneri che spettano a ciascun condomino." }
      ]
    }
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
}
@media screen and (max-width: 575px) {
  .modal-content {
    height: 30vmax;
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

.modal-backdrop {
  display: none !important;
}
</style>
