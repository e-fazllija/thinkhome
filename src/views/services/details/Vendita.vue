<template>
    <div class="page-content bg-white">
      <CommonBanner :img="bnr5" title="Immobili in vendita" text="Immobili in vendita" />
    </div>
    <section class="content-inner-3">
        <div class="container">
          <div class="row align-items-center about-bx4">
            <div class="col-lg-6 m-b30 aos-item aos-init aos-animate">
              <div class="section-head style-2">
                <!-- <h6 class="sub-title text-primary">About Us</h6> -->
                <h2 class="title m-b20">Affidaci la vendita del tuo Immobile.</h2>
  <p>Il nostro team di esperti ti accompagnerà in ogni fase della vendita, garantendoti un servizio completo e personalizzato. Ecco cosa offriamo:</p>
  <ul>
    <li><p><strong>• Valutazione accurata:</strong> Determineremo insieme il valore di mercato del tuo immobile.</p></li>
    <li><p><strong>• Marketing strategico:</strong> Creeremo un piano di marketing su misura.</p></li>
    <li><p><strong>• Gestione delle visite:</strong> Organizzeremo visite guidate.</p></li>
    <li><p><strong>• Trattative e negoziazione:</strong> Ti assisteremo durante tutte le fasi delle trattative.</p></li>
    <li><p><strong>• Supporto legale e burocratico:</strong> Ti forniremo assistenza legale.</p></li>
  </ul>
  <h4 class="my-4">Scegliendo il nostro servizio di vendita, potrai beneficiare di:</h4>
  <ul>
    <li><p><strong>• Esperienza e professionalità:</strong> Il nostro team è composto da agenti immobiliari esperti.</p></li>
    <li><p><strong>• Massima trasparenza:</strong> Ti terremo costantemente aggiornato.</p></li>
    <li><p><strong>• Vendita rapida e sicura:</strong> Grazie alla nostra vasta rete di contatti.</p></li>
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
                  src="@/assets/images/banner/bnr41.jpg"
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
  import bnr5 from '@/assets/images/banner/bnr3.jpg'
  import bg2 from '@/assets/images/background/bg2.png'
  import { RouterLink } from 'vue-router'
  import MainBanner3 from '@/components/MainBanner3.vue'
  
  export default defineComponent({
    name: 'vendita',
    components: { CommonBanner, RouterLink, MainBanner3 },
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
  