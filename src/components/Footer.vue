<template>
  <footer class="site-footer style-1" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 aos-item">
          <div class="footer-bg" :style="`background-image: url(${footerBg})`"></div>
        </div>
        <div class="col-lg-7">
          <div class="footer-top">
            <div class="row">
              <div class="col-md-12 aos-item">
                <div class="footer-logo logo-light">
                  <RouterLink to="/"
                    ><img
                      class="header_logo2"
                      src="@/assets/images/logo-white.png"
                      alt="Footer Logo"
                  /></RouterLink>
                </div>
              </div>
              <div class="col-md-5 col-sm-6 aos-item">
                <div class="widget widget_services">
                  <h4 class="footer-title">Our Links</h4>
                  <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about-us">About Us</RouterLink></li>
                    <li><RouterLink to="/services">Services</RouterLink></li>
                    <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
                    <li><RouterLink to="/blog-grid">Blogs</RouterLink></li>
                    <li><RouterLink to="/contact-us">Contact Us</RouterLink></li>
                    <li><RouterLink to="/team">Team</RouterLink></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-7 col-sm-6 aos-item">
                <div class="widget widget_about">
                  <h4 class="footer-title">About Us</h4>
                  <p>
                    Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum, vitae tempus
                    erat pretium. Fusce fermentum lacus ut nunc dignissim hendrerit. Quisque sit
                    amet dignissim orci, eget laoreet eros.
                  </p>
                  <ul class="social-list style-1">
                    <li>
                      <a href="https://www.facebook.com/dexignzone/" target="_blank"
                        ><i class="fab fa-facebook-f"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dexignzone/" target="_blank"
                        ><i class="fab fa-instagram"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/dexignzones/" target="_blank"
                        ><i class="fab fa-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@dexignzone1723" target="_blank"
                        ><i class="fab fa-youtube"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer bottom part -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <span class="copyright-text"
              >Copyright © {{ new Date().getFullYear() }}
              <a href="https://dexignzone.com/" class="text-primary" target="_blank">DexignZone</a>
              All rights reserved.</span
            >
          </div>
          <div class="col-md-6 text-center text-md-end">
            <ul class="footer-link d-inline-block">
              <li><RouterLink to="?">Privacy Policy</RouterLink></li>
              <li><RouterLink to="?">Team & Condition</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import footerBg from '@/assets/images/footer-bg.jpg'

export default defineComponent({
  name: 'footer_',
  setup() {
    return { footerBg }
  }
})
</script>

<style scoped></style>
