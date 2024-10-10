<template>
  <section class="content-inner line-img overflow-hidden">
    <div class="container">
      <div class="site-filters style-1 clearfix center">
        <ul class="filters" data-toggle="buttons">
          <li
            :class="`btn ${addActive == 'All' ? 'active' : ''}`"
            @click="
              () => {
                filterGallery('All')
              }
            "
          >
            <RouterLink to="?">All</RouterLink>
          </li>
          <li
            :class="`btn ${addActive == 'Architecture' ? 'active' : ''}`"
            @click="
              () => {
                filterGallery('Architecture')
              }
            "
          >
            <RouterLink to="?">Architecture</RouterLink>
          </li>
          <li
            :class="`btn ${addActive == 'Interior Design' ? 'active' : ''}`"
            @click="
              () => {
                filterGallery('Interior Design')
              }
            "
          >
            <RouterLink to="?">Interior Design</RouterLink>
          </li>
          <li
            :class="`btn ${addActive == 'Construction' ? 'active' : ''}`"
            @click="
              () => {
                filterGallery('Construction')
              }
            "
          >
            <RouterLink to="?">Construction</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <Lightgallery
        :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }"
        class="row lightgallery"
      >
        <li
          class="card-container architecture col-xl-4 col-md-6 col-sm-6 m-b30"
          :key="index"
          v-for="(item, index) in items"
        >
          <div class="dz-box overlay style-1">
            <div class="dz-media">
              <img :src="item.img" alt="" />
            </div>
            <div class="dz-info">
              <span :data-src="item.img" class="view-btn lightimg">
                <img :src="item.img" alt="" style="display: none" />
              </span>
              <h6 class="sub-title">INTERIOR DESIGN</h6>
              <h4 class="title m-b15">
                <RouterLink to="/portfolio-details"
                  >Modern House Interior <span>New York</span></RouterLink
                >
              </h4>
            </div>
          </div>
        </li>
      </Lightgallery>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import work_pic1 from '@/assets/images/work/work-1/pic-1.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-3.jpg'
import work_pic4 from '@/assets/images/work/work-1/pic-4.jpg'
import work_pic5 from '@/assets/images/work/work-1/pic-5.jpg'
import work_pic6 from '@/assets/images/work/work-1/pic-6.jpg'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { Lightgallery, RouterLink },
  setup() {
    const data = [
      { img: work_pic1, categery: 'All Interior Design' },
      { img: work_pic2, categery: 'All Architecture Construction' },
      { img: work_pic3, categery: 'All Interior Design' },
      { img: work_pic4, categery: 'All Construction' },
      { img: work_pic5, categery: 'All Architecture Construction' },
      { img: work_pic6, categery: 'All Interior Design Construction' }
    ]
    const items = ref(data)
    const addActive = ref('All')

    return { data, items, addActive }
  },
  data: () => ({
    plugins: [lgThumbnail, lgZoom]
  }),
  methods: {
    filterGallery(name: string) {
      const updateItems = this.data.filter((el) => el.categery.includes(name))
      this.items = updateItems
      this.addActive = name
    }
  }
})
</script>

<style scoped></style>
