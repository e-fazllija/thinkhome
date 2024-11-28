<template>
  <div class="row align-items-center">
    <div class="col-xl-4 col-md-6 m-lg-b30 aos-item aos-init aos-animate"
      v-for="({ id, icon, title, title2, description, to_name }, ind) in servicesCard" :key="ind">
      <div class="icon-bx-wraper style-9 mb-5">
        <div class="icon-lg">
          <span class="icon-cell">
            <i :class="icon"></i>
          </span>
        </div>
        <div class="icon-content">
          <h4 class="dz-title">{{ title }}</h4>
          <h6 v-if="title2">{{ title2 }}</h6>
          <p>{{ description }}</p>
          <RouterLink :to="{ name: to_name, params: { id: id } }" class="btn btn-primary btn-rounded btn-sm hover-icon">
            <span>Dettaglio</span>
            <i class="fas fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      servicesCard: [
        { id: 1, to_name: 'vendita', icon: 'flaticon-interior-design', title: 'IMMOBILI IN VENDITA', title2:'La tua casa, la nostra passione!', description: "Da anni ci dedichiamo con entusiasmo alla vendita di immobili, mettendo a tua disposizione tutta la nostra esperienza e competenza.Grazie alla nostra profonda conoscenza del mercato e a un'attenta analisi delle tue esigenze, ti offriamo un servizio su misura che va oltre la semplice intermediazione. Troveremo l'acquirente perfetto per la tua casa, accompagnandoti con professionalità e trasparenza in ogni fase della trattativa." },
        { id: 2, to_name: 'affitto', icon: 'flaticon-home', title: 'IMMOBILI IN AFFITTO', title2:'Affitta in tutta sicurezza!', description: "Cerchi un inquilino affidabile per il tuo immobile? Affidati alla nostra esperienza!Offriamo un servizio di ricerca personalizzato, selezionando accuratamente i potenziali inquilini in base alle tue esigenze.Ci occupiamo di ogni aspetto burocratico garantendoti la massima tranquillità." },
        { id: 3, to_name: 'valutazione_immobile', icon: 'flaticon-happy', title: 'VALUTAZIONE IMMOBILE', description: "La nostra agenzia ti offre una valutazione accurata e dettagliata del tuo immobile, basata su un'analisi approfondita del mercato e delle caratteristiche della tua proprietà. Grazie alla nostra esperienza e ai nostri strumenti di valutazione, potrai conoscere il valore reale della tua casa e prendere decisioni consapevoli." },
        { id: 4, to_name: 'pratiche_urbanistiche', icon: 'flaticon-blueprint-1', title: 'PRATICHE URBANISTICHE', description: 'Devi ristrutturare un ufficio, un appartamento, un negozio? Le normative cambiano con grande rapidità: è quindi importante rivolgersi a tecnici qualificati e costantemente aggiornati per essere guidati con competenza. Ogni immobile ha la sua storia, le sue peculiarità: col nostro studio non dovrai preoccuparti dei permessi e di tutta la documentazione da presentare.' },
        { id: 5, to_name: 'pratiche_catastali', icon: 'flaticon-crane', title: 'PRATICHE CATASTALI', description: 'Rilievo del fabbricato, realizzazione dei modelli per l’attribuzione della rendita catastale, redazione delle planimetrie: il nostro studio si occupa di tutte le pratiche catastali e di edilizia, per privati e per imprese.  E se il vostro immobile ha subito una variazione? Ci occupiamo anche di pratiche di accatastamento a seguito di frazionamenti o ristrutturazioni.' },
        { id: 6, to_name: 'perizie_stime_tribunale', icon: 'flaticon-interior-design-1', title: 'PERIZIE, STIME PER TRIBUNALE', description: 'Devi comprare o vendere un immobile? Dividere il patrimonio immobiliare? I nostri professionisti hanno una lunga esperienza nel campo delle stime. Aiutiamo i nostri clienti nella compravendita, nella divisione, ma anche nella redazione di perizie di stima giurate e stime in campo contenzioso. Davanti al giudice possiamo essere i tuoi Consulenti Tecnici di Parte e di Ufficio, il tuo perito di fiducia.' },
        { id: 7, to_name: 'investimenti_immobiliari', icon: 'fas fa-chart-line', title: 'INVESTIMENTI IMMOBILIARI', description: "Offriamo servizi completi di compravendita e rivendita di proprietà, con un'attenzione particolare alle opportunità di case all'asta. Il nostro team di esperti vi guiderà passo dopo passo per massimizzare i vostri rendimenti e minimizzare i rischi. Siamo qui per trasformare il vostro investimento in un successo, con strategie personalizzate e soluzioni innovative. Scoprite le migliori occasioni sul mercato immobiliare e iniziate oggi stesso a costruire il vostro futuro finanziario con noi." },
        { id: 8, to_name: 'edilizia', icon: 'flaticon-home', title: 'EDILIZIA', description: "La nostra società immobiliare è specializzata nella gestione di progetti edilizi, sia per la costruzione di nuovi cantieri che per la ristrutturazione di immobili. Offriamo un servizio completo che segue ogni fase, dalla progettazione alla realizzazione, con l’obiettivo di valorizzare al massimo ogni proprietà. Che tu voglia costruire da zero o riqualificare un immobile, garantiamo soluzioni personalizzate e un’attenzione costante ai dettagli. Affidati alla nostra esperienza per un progetto di successo." },
        { id: 9, to_name: 'servizi_vari', icon: 'flaticon-furniture', title: 'SERVIZI VARI', description: "Offriamo una gamma di servizi, tra cui consulenza creditizia, convenzioni notarili, arredamenti, progettazione d'interni e render per interni ed esterni. Affidati a noi per soluzioni complete e personalizzate che rispondano a tutte le tue esigenze, garantendo qualità e professionalità in ogni dettaglio." }
      ]
    }
  }
})
</script>

<style scoped></style>
