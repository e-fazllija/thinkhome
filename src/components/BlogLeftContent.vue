<template>
  <div class="col-xl-4 col-lg-4 m-b30 dz-order-1" style="z-index: 99">
    <aside class="side-bar sticky-top left">
      <div class="widget widget_tag_cloud">
        <div class="widget-title">
          <h4 class="title">Ricerca</h4>
          <div class="dz-separator style-1 text-primary mb-0"></div>
        </div>
        <div class="search-bx">
          <form action="#">
            <div class="input-group">
              <input
                name="text"
                class="form-control"
                placeholder="Inserisci parola chiave..."
                type="text"
              />
              <span class="input-group-btn">
                <button type="submit" class="btn btn-primary sharp radius-no">
                  <i class="la la-search scale3"></i>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="widget widget_categories">
        <div class="widget-title">
          <h4 class="title">Categorie</h4>
          <div class="dz-separator style-1 text-primary mb-0"></div>
        </div>
        <ul>
          <li class="cat-item"><RouterLink to="?">Residence</RouterLink></li>
          <li class="cat-item"><RouterLink to="?">Beauty</RouterLink></li>
          <li class="cat-item"><RouterLink to="?">Fashion</RouterLink></li>
          <li class="cat-item"><RouterLink to="?">Images</RouterLink></li>
          <li class="cat-item"><RouterLink to="?">Lifestyle</RouterLink></li>
        </ul>
      </div>
      <div class="widget recent-posts-entry">
        <div class="widget-title">
          <h4 class="title">Annunci recenti</h4>
          <div class="dz-separator style-1 text-primary mb-0"></div>
        </div>
        <div class="widget-post-bx">
          <div class="widget-post clearfix">
            <div class="dz-media">
              <RouterLink to="/blog-details"
                ><img src="@/assets/images/blog/recent-blog/pic1.jpg" alt=""
              /></RouterLink>
            </div>
            <div class="dz-info">
              <h4 class="title">
                <RouterLink to="/blog-details">Fusce mollis felis quis tristique</RouterLink>
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
                <RouterLink to="/blog-details">We Completed Our New Hotel Project</RouterLink>
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
                ><img src="@/assets/images/blog/recent-blog/pic3.jpg" alt=""
              /></RouterLink>
            </div>
            <div class="dz-info">
              <h4 class="title">
                <RouterLink to="/blog-details">We Are Building Global Company Offices</RouterLink>
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
                ><img src="@/assets/images/blog/recent-blog/pic4.jpg" alt=""
              /></RouterLink>
            </div>
            <div class="dz-info">
              <h4 class="title">
                <RouterLink to="/blog-details">About Our Board of Directors</RouterLink>
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
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'blog_left_content',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
