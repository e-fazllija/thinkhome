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
  