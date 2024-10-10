<template>
  <footer class="site-footer style-1" id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 aos-item">
            <div class="ft-calltoaction">
              <h2 class="title">Let's Make Your Dream House Together</h2>
              <RouterLink to="/contact-us" class="btn btn-primary btn-rounded"
                >Contact Us</RouterLink
              >
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 aos-item">
            <div class="widget widget_about">
              <div class="footer-logo logo-light">
                <RouterLink to="/"
                  ><img
                    class="header_logo2"
                    src="@/assets/images/logo-white-2.png"
                    alt="Footer Logo"
                /></RouterLink>
              </div>
              <p>
                Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum, vitae tempus erat
                pretium.
              </p>
              <div class="widget_getintuch">
                <ul>
                  <li>
                    <i class="las la-map-marker-alt"></i>
                    <span>#8901 Marmora Road Chi Minh City, Vietnam</span>
                  </li>
                  <li>
                    <i class="las la-phone-volume"></i>
                    <span>1800-123-4567</span>
                  </li>
                </ul>
              </div>
              <ul class="social-list style-1 mt-3">
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
          <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6 aos-item">
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
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 aos-item">
            <div class="widget widget_services">
              <h4 class="footer-title">Our Service</h4>
            <!--   <ul>
                <li><RouterLink to="?">Floor Plan Design</RouterLink></li>
                <li><RouterLink to="?">Furniture Work</RouterLink></li>
                <li><RouterLink to="?">Construction Work</RouterLink></li>
                <li><RouterLink to="?">Architecture</RouterLink></li>
                <li><RouterLink to="?">Interior Designing</RouterLink></li>
                <li><RouterLink to="?">Planning Solution</RouterLink></li>
                <li><RouterLink to="?">24x7 Support</RouterLink></li>
              </ul> -->
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos-item">
            <div class="widget recent-posts-entry">
              <h4 class="footer-title">Recent Posts</h4>
              <div class="widget-post-bx">
                <div class="widget-post clearfix">
                  <div class="dz-media">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/recent-blog/pic1.jpg" alt=""
                    /></RouterLink>
                  </div>
                  <div class="dz-info">
                    <h4 class="title">
                      <RouterLink to="/blog-details" class="text-white"
                        >Fusce mollis felis quis tristique</RouterLink
                      >
                    </h4>
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">7 March, 2020</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="widget-post clearfix">
                  <div class="dz-media">
                    <RouterLink to="/blog-details"
                      ><img src="@/assets/images/blog/recent-blog/pic2.jpg" alt=""
                    /></RouterLink>
                  </div>
                  <div class="dz-info">
                    <h4 class="title">
                      <RouterLink to="/blog-details" class="text-white"
                        >Fusce mollis felis quis tristique</RouterLink
                      >
                    </h4>
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">7 March, 2020</li>
                      </ul>
                    </div>
                  </div>
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
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'footer_',
  setup() {
    return {}
  },
  components: { RouterLink }
})
</script>

<style scoped></style>
