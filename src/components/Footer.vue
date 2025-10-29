<template>
  <footer class="site-footer style-2" id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 aos-item">
            <div class="widget widget_about">
              <h4 class="footer-title">CONTATTI</h4>
              <div class="widget_getintuch">
                <ul>
                  <li>
                    <i class="las la-mail-bulk"></i>
                    info@thinkhome.it 
                  </li>
                  <li>
                    <i class="las la-exclamation-triangle"></i>
                    <RouterLink to="/send-complaint">Invia un reclamo</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">LINK</h4>
              <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about-us">Chi Siamo</RouterLink></li>
                <li><a href="https://thinkhomestorage.blob.core.windows.net/generic/rivista-thinkhome.pdf" download="rivista" target="_blank"><h6 style="color: white;">Scarica rivista</h6></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">IMMOBILIARE</h4>
              <ul>
                <li><RouterLink to="/immobili-in-vendita/Qualsiasi/Qualsiasi/0/0/-1">Immobili in Vendita</RouterLink></li>
                <li><RouterLink to="/immobili-in-affitto/Qualsiasi/Qualsiasi/0/0/-1">Immobili in Affitto</RouterLink></li>
                <li><RouterLink to="/aste-immobiliari/Qualsiasi/Qualsiasi/0/0/-1">Aste Immobiliari</RouterLink></li>
                <li><RouterLink to="/richiesta-valutazione-immobile">Richieste Valutazioni Immobili</RouterLink></li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-sm-4 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">OUR SERVICES</h4>
              <ul>
                <li><RouterLink to="?">Strategy & Research</RouterLink></li>
                <li><RouterLink to="?">Web Development</RouterLink></li>
                <li><RouterLink to="?">Web Solution</RouterLink></li>
                <li><RouterLink to="?">Digital Marketing</RouterLink></li>
                <li><RouterLink to="?">App Design</RouterLink></li>
              </ul>
            </div>
          </div> -->
          <!-- <div class="col-lg-3 col-sm-4 col-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">OTHER LINKS</h4>
              <ul>
                <li><RouterLink to="?">FAQ</RouterLink></li>
                <li><RouterLink to="?">Portfolio</RouterLink></li>
                <li><RouterLink to="?">Privacy Policy</RouterLink></li>
                <li><RouterLink to="?">Terms & Condition</RouterLink></li>
                <li><RouterLink to="?">Support</RouterLink></li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- footer bottom part -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-start">
            <span class="copyright-text"
              >© {{ new Date().getFullYear() }}
              ThinkHome
              tutti i Diritti Riservati.</span
            >
          </div>
          <div class="col-md-8 text-center text-md-end">
            <ul class="footer-link d-inline-block">
              <li>Promedia S.r.l - Viale Ungheria 91, 00039 Zagarolo (RM)</li>
              <li>P. Iva: 13244951003</li>
              <li><RouterLink target="_blank" to="privacy-policy">Privacy Policy</RouterLink></li>
              <!-- <li><RouterLink target="_blank"  to="general-conditions">Condizioni generali</RouterLink></li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footer_',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
