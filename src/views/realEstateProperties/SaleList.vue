<template>
  <div class="page-content bg-white">
    <CommonBanner :img="bnr3" title="Immobili in vendita" text="Immobili in vendita" />
    <div class="content-inner">
      <div class="container">
        <div class="row">
          <BlogLeftContent />
          <div class="col-xl-8 col-lg-8">
            <div class="dz-card blog-half style-1 m-b50 aos-item">
              <div class="dz-media">
                <RouterLink to="/blog-details"
                  ><img src="@/assets/images/blog/large/pic1.jpg" alt=""
                /></RouterLink>
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li>April 26, 2021</li>
                    <li class="post-user">By <RouterLink to="?">John Doe</RouterLink></li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">Modern House Interior</RouterLink>
                </h3>
                <div class="dz-post-text text">
                  <p>
                    You can align your image to the left, right, or center with RouterLink caption,
                    link and alt text New Journey to the Mars in the.
                  </p>
                </div>
                <div class="read-more">
                  <RouterLink to="?" class="btn btn-primary btn-rounded btn-sm hover-icon"
                    ><span>Dettaglio </span><i class="fas fa-arrow-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
            <BlogPagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonBanner from '@/elements/CommonBanner.vue'
import bnr3 from '@/assets/images/banner/bnr3.jpg'
import BlogLeftContent from '@/components/BlogLeftContent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import BlogPagination from '@/elements/BlogPagination.vue'
export default defineComponent({
  name: 'blog_list_sidebar',
  components: { CommonBanner, BlogLeftContent, Swiper, SwiperSlide, BlogPagination },

  setup() {
    return {
      bnr3,

      modules: [Navigation, Autoplay]
    }
  }
})
</script>

<style scoped></style>
