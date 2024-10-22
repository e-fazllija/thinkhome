<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr5" title="Dettaglio Servizio" text="Dettaglio Servizio" />
    <section
      class="section-full content-inner-2"
      :style="`background-image: url(${bg2});
        background-position: right bottom;
        background-size: 100%;
        background-repeat: no-repeat;`"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7 aos-item">
            <div class="service-detail">
              <div class="dz-page-text">
                <h2 class="title mb-2">
                  {{ item.title }}
                </h2>
                <p>
                  {{  item.description }}
                </p>
                <!-- <div class="row">
                  <div class="col-lg-6">
                    <img
                      src="@/assets/images/services/service-detail/pic1.jpg"
                      class="m-b30 w-100"
                      alt=""
                    />
                    <p class="m-b0">
                      Nunc eu pulvinar mauris, in volutpat nulla. Donec efficitur at lectus sit amet
                      egestas. Morbi sit amet auctor quam. Donec auctor congue orci non semper.
                    </p>
                    <p class="m-b0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a purus ac lorem
                      dictum mattis vulputate id lorem. Phasellus imperdiet velit non enim semper,
                      ac euismod nisl mattis. Mauris sollicitudin purus interdum.
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <img
                      src="@/assets/images/services/service-detail/pic2.jpg"
                      class="m-b30 w-100"
                      alt=""
                    />
                    <p class="m-b0">
                      Nunc eu pulvinar mauris, in volutpat nulla. Donec efficitur at lectus sit amet
                      egestas. Morbi sit amet auctor quam. Donec auctor congue orci non semper.
                    </p>
                    <p class="m-b0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a purus ac lorem
                      dictum mattis vulputate id lorem. Phasellus imperdiet velit non enim semper,
                      ac euismod nisl mattis. Mauris sollicitudin purus interdum.
                    </p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 m-b30 aos-item right">
            <div class="sticky-top">
              <div class="widget ext-sidebar-menu">
                <ul class="menu">
                  <!-- <li class="active">
                    <RouterLink to="?">Interior Design</RouterLink>
                  </li>
                  <li><RouterLink to="?">Floor Plan Design</RouterLink></li>
                  <li><RouterLink to="?">Construction</RouterLink></li>
                  <li><RouterLink to="?">Furniture Production</RouterLink></li>
                  <li><RouterLink to="?">Architecture Design</RouterLink></li>
                  <li><RouterLink to="?">24X 7 Support</RouterLink></li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="content-inner-2">
      <div class="container-fluid">
        <Testimonial2 />
      </div>
    </section>
    <Brands /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import Brands from '@/elements/Brands.vue'
import Testimonial2 from '@/components/Testimonial2.vue'
import bnr5 from '@/assets/images/banner/bnr5.jpg'
import bg2 from '@/assets/images/background/bg2.png'
import { RouterLink } from 'vue-router'
import MainBanner3 from '@/components/MainBanner3.vue'

export default defineComponent({
  name: 'services_detail',
  components: { CommonBanner, Testimonial2, Brands, RouterLink, MainBanner3 },
  setup() {
    return { bnr5, bg2 }
  },
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      description: "",
      item: {id: 0, title: '', description: ''},
      servicesCard: [
        { id: 1, title: 'PRATICHE EDILIZIE', description: 'Devi ristrutturare un ufficio, un appartamento, un negozio? Le normative cambiano con grande rapidità: è quindi importante rivolgersi a tecnici qualificati e costantemente aggiornati per essere guidati con competenza. Ogni immobile ha la sua storia, le sue peculiarità: col nostro studio non dovrai preoccuparti dei permessi e di tutta la documentazione da presentare.' },
        { id: 2, title: 'PRATICHE CATASTALI', description: 'Rilievo del fabbricato, realizzazione dei modelli per l’attribuzione della rendita catastale, redazione delle planimetrie: il nostro studio si occupa di tutte le pratiche catastali e di edilizia, per privati e per imprese.  E se il vostro immobile ha subito una variazione? Ci occupiamo anche di pratiche di accatastamento a seguito di frazionamenti o ristrutturazioni.' },
        { id: 3, title: 'PERIZIE, STIME E TRIBUNALE', description: 'Devi comprare o vendere un immobile? Dividere il patrimonio immobiliare? I nostri professionisti hanno una lunga esperienza nel campo delle stime. Aiutiamo i nostri clienti nella compravendita, nella divisione, ma anche nella redazione di perizie di stima giurate e stime in campo contenzioso. Davanti al giudice possiamo essere i tuoi Consulenti Tecnici di Parte e di Ufficio, il tuo perito di fiducia.' },
        { id: 4, icon: 'flaticon-blueprint-1', title: 'SCIA - Segnalazione Certificata di Inizio Attività', description: "E' l'atto con cui le imprese possono iniziare, modificare o cessare un'attività produttiva (artigianale, commerciale, industriale); ciò avviene senza dover più attendere risposta e verifiche da parte degli enti competenti. La SCIA infatti produce effetti immediati ai sensi dell'art. 19 della legge 241/90." },
        { id: 5, icon: 'flaticon-crane', title: 'SCIA alternativa al PDC Permesso di Costruire (Ex DIA - Denuncia di Inizio Attività)', description: "È un atto amministrativo, la cui disciplina è contenuta nel Testo unico dell'edilizia della Repubblica italiana (decreto del presidente della Repubblica 6 giugno 2001 n. 380) che ne descrive il potere e i limiti agli artt. 22 e 23. Il suo utilizzo è per interventi di manutenzione straordinaria qualora riguardino ad esempio le parti strutturali dell'edificio o i prospetti." },
        { id: 6, icon: 'flaticon-interior-design-1', title: 'CILA - Comunicazione di inizio lavori asseverata', description: "Devi richiederla se dovrai eseguire interventi di manutenzione straordinaria e modifiche interne di carattere edilizio. Quando si vogliono eseguire le seguenti tipologie di lavori, previste dall'art. 6 del D.P.R 6 giugno 2001 n. 380 così come modificato dall'art. 5 del D.L 25 marzo 2010 n. 40 convertito in legge dalla L. 22 maggio 2010 n. 73 e ss.mm.ii." },
        { id: 7, icon: 'flaticon-furniture', title: 'Permesso di Costruire', description: "Cambio destinazione d'uso: nel linguaggio urbanistico si usa l'espressione destinazione d'uso per indicare l'insieme delle finalità e delle modalità di utilizzo di una costruzione edilizia. Alcune delle principali destinazioni d'uso sono: industriale, residenziale e commerciale. È possibile, per esempio, che si voglia trasformare un'abitazione in ufficio oppure il contrario." },
        { id: 8, icon: 'flaticon-home', title: "Cambio di destinazione d'uso", description: "Cambio destinazione d'uso: nel linguaggio urbanistico si usa l'espressione destinazione d'uso per indicare l'insieme delle finalità e delle modalità di utilizzo di una costruzione edilizia. Alcune delle principali destinazioni d'uso sono: industriale, residenziale e commerciale. È possibile, per esempio, che si voglia trasformare un'abitazione in ufficio oppure il contrario." },
        { id: 9, icon: 'flaticon-support', title: 'Conteggio tabelle millesimali', description: "Conteggio tabelle millesimali. Hai bisogno di effettuare il calcolo delle tabelle millesimali all'interno del tuo condominio? Affidati ai tecnici dello STUDIO TECNICO MAZZA. Le tabelle millesimali sono lo strumento attraverso il quale si individuano gli oneri che spettano a ciascun condomino." }
      ]
    }
  },
  mounted(){
    this.getItem();
  },
  methods: {
    getItem(){
      console.log(this.$route.params.id);
      const _id = this.servicesCard.find(x => x.id.toString() === this.id)?.id;
      const _title = this.servicesCard.find(x => x.id.toString() === this.id)?.title;
      const _description = this.servicesCard.find(x => x.id.toString() === this.id)?.description;
      this.item.id = _id ?? 0;
      this.item.title = _title ?? '';
      this.item.description = _description ?? '';
    }
  }
})
</script>

<style scoped></style>
