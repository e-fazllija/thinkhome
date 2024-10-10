<template>
  <div class="container">
    <div class="section-head style-1 text-center">
      <h6 class="sub-title text-primary">OUR BLOG</h6>
      <h2 class="title">Latest News Feed</h2>
    </div>
    <div class="blog-area">
      <div class="row">
        <div class="col-lg-4 col-md-12 m-b30">
          <div class="dz-card blog-grid style-1 aos-item h-100 overlay-post">
            <div class="dz-media">
              <RouterLink to="/blog-details"
                ><img src="@/assets/images/blog/pic1.jpg" alt=""
              /></RouterLink>
            </div>
            <div class="dz-info">
              <div class="dz-meta">
                <ul>
                  <li class="post-date"><strong>20</strong><span>March</span></li>
                  <li class="post-category"><RouterLink to="?">Architectural</RouterLink></li>
                  <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                </ul>
              </div>
              <h5 class="dz-title">
                <RouterLink to="/blog-details"
                  >Sed lacinia pulvinar odio, nec tempus augue.</RouterLink
                >
              </h5>
              <div class="read-more">
                <RouterLink
                  to="/blog-details"
                  class="btn btn-primary btn-rounded btn-sm hover-icon"
                >
                  <span>Read More</span>
                  <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 m-b30">
          <div class="dz-card blog-grid style-1 aos-item h-100">
            <div class="dz-media">
              <RouterLink to="/blog-details"
                ><img src="@/assets/images/blog/blog-grid/pic2.jpg" alt=""
              /></RouterLink>
            </div>
            <div class="dz-info">
              <div class="dz-meta">
                <ul>
                  <li class="post-date"><strong>15</strong><span>March</span></li>
                  <li class="post-category">
                    <RouterLink to="?">Architectural</RouterLink>
                  </li>
                  <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                </ul>
              </div>
              <h5 class="dz-title">
                <RouterLink to="/blog-details">Integer vestibulum rutrum aliquet cras.</RouterLink>
              </h5>
              <div class="read-more">
                <RouterLink
                  to="/blog-details"
                  class="btn btn-primary btn-rounded btn-sm hover-icon"
                >
                  <span>Read More</span>
                  <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 m-b30">
          <div class="dz-card blog-grid style-1 aos-item h-100">
            <div class="dz-media">
              <RouterLink to="/blog-details"
                ><img src="@/assets/images/blog/blog-grid/pic3.jpg" alt=""
              /></RouterLink>
            </div>
            <div class="dz-info">
              <div class="dz-meta">
                <ul>
                  <li class="post-date"><strong>05</strong><span>March</span></li>
                  <li class="post-category">
                    <RouterLink to="?">Architectural</RouterLink>
                  </li>
                  <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                </ul>
              </div>
              <h5 class="dz-title">
                <RouterLink to="/blog-details"
                  >Aenean sit amet ex nec nisl consectetur iaculis.</RouterLink
                >
              </h5>
              <div class="read-more">
                <RouterLink
                  to="/blog-details"
                  class="btn btn-primary btn-rounded btn-sm hover-icon"
                >
                  <span>Read More</span>
                  <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
