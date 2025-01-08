<template>
  <div class="container">
    <div class="row">
      <!-- Sezione Immagine + Testo -->
      <div class="col-lg-6">
        <div class="img3 aos-item me-5 mb-4">
          <img src="@/assets/images/PhotoAcademy1.jpeg" alt="Academy ThinkHome" class="img-fluid rounded shadow" />
        </div>
        <div class="recruitment-text p-4 rounded shadow">
  <h3 class="text-center title">Unisciti all'Academy ThinkHome</h3>
  <p class="text-center subtitle mb-3">
    Scopri una carriera nel settore immobiliare con noi.<br />
    Che tu abbia già esperienza o che sia la tua prima volta, troverai il supporto ideale per crescere. Ti forniremo formazione continua e affiancamento sul campo per raggiungere i tuoi obiettivi.
  </p>
  <p class="text-center highlight mb-3">Non hai esperienza? Non c'è problema, iniziamo insieme!</p>
  <p class="text-center mb-4">
    <strong>Vuoi sapere di più? Fissa un colloquio scrivendo a:</strong><br />
    <a href="mailto:info@thinkhome.it" class="email">info@thinkhome.it</a>
  </p>
  <h4 class="text-center title">ThinkHome</h4>
  <p class="text-center tagline">TANTI SERVIZI, UN'UNICA REALTÀ</p>
</div>

      </div>

      <!-- Sezione Programma Lezioni -->
      <div class="col-lg-6 align-self-center">
        <div class="lesson-program">
          <h2 class="text-center mb-4">Programma delle Lezioni</h2>
          <ul class="list-unstyled program-list">
            <li class="program-item mb-3">
              <h4 class="date text-primary">13-gen</h4>
              <p class="title">Professional Operating Plan: Ottenere risultati con la Pianificazione Operativa</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">27-gen</h4>
              <p class="title">Crea e rafforza la tua Lead Generation Immobiliare</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">10-feb</h4>
              <p class="title">Agire in Acquisizione: come rendere al massimo con i venditori</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">25-feb</h4>
              <p class="title">Nuove tecniche di vendita e negoziazione immobiliare</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">11-mar</h4>
              <p class="title">Tecniche di monitoraggio temporale e tattiche per acquisire e vendere nel tempo</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">25-mar</h4>
              <p class="title">Entrare in trattativa ed uscirne vincenti fornendo valore</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">09-apr</h4>
              <p class="title">Fai affari con le referenze</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">29-apr</h4>
              <p class="title">Come aumentare tua reputazione e notorietà da Agente Immobiliare</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">13-mag</h4>
              <p class="title">Vendere al meglio con parole e domande</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">27-mag</h4>
              <p class="title">Comunicare al Telefono per Acquisitori</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">10-giu</h4>
              <p class="title">Come creare Obiettivi motivanti</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">24-giu</h4>
              <p class="title">Il Linguaggio del Corpo per la vendita</p>
            </li>
            <li class="program-item mb-3">
              <h4 class="date text-primary">08-lug</h4>
              <p class="title">Accelera ora il tuo business immobiliare</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'homeAbout',
})
</script>

<style scoped>
/* Sezione immagine + testo */
.img3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img3 img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.recruitment-text {
  
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.recruitment-text .title {
  font-size: 1.8rem; /* Stile del titolo principale */
  font-weight: bold;
  color: #c0a47a; /* Testo nero */
}

.recruitment-text .subtitle {
  font-size: 1rem; /* Testo descrittivo */
  line-height: 1.6;
  color: #000; /* Testo nero */
}

.recruitment-text .highlight {
  font-size: 1.1rem; /* Evidenziazione */
  font-weight: bold;
  color: #c0a47a; /* Testo nero */
}

.recruitment-text .email {
  font-size: 1rem;
  font-weight: bold;
  color: #c0a47a; /* Testo nero */
  text-decoration: none; /* Rimuovi la sottolineatura */
}

.recruitment-text .email:hover {
  text-decoration: underline; /* Aggiungi sottolineatura al passaggio del mouse */
}

.recruitment-text .tagline {
  font-size: 0.9rem;
  font-style: italic;
  color: #000; /* Testo nero */
}

.lesson-program .text {
 
  color: #1b5d64; /* Testo nero */

}


/* Programma delle lezioni */
.lesson-program {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.lesson-program h2 {
  font-size: 1.5rem;
  color: #333;
}

.program-list {
  padding: 0;
  margin: 0;
}

.program-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.program-item:last-child {
  border-bottom: none;
}

.date {
  font-weight: bold;
  font-size: 1.1rem;
  color: #007bff;
}

.title {
  font-size: 0.95rem;
  color: #555;
}
</style>
