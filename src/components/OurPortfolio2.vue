<template>
  <div class="container-fluid mb-5">
    <Lightgallery :settings="{ speed: 500, plugins: plugins, selector: '.lightimg' }">
      <div class="row g-4">
        <div
          class="col-lg-3 col-md-6 col-sm-12"
          v-for="({ img, setStyle }, index) in ourBlog"
          :key="index"
        >
          <div :class="`dz-box overlay style-1 ${setStyle}`">
            <div class="dz-media">
              <a :data-src="img" class="lightimg">
                <img v-lazy="img" alt="" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Lightgallery>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import work_pic1 from '@/assets/images/work/work-1/pic-3.jpg'
import work_pic2 from '@/assets/images/work/work-1/pic-7.jpg'
import work_pic3 from '@/assets/images/work/work-1/pic-9.jpg'
import work_pic4 from '@/assets/images/work/work-1/pic-16.jpg'
import work_pic5 from '@/assets/images/work/work-1/pic-5.jpg'
import work_pic6 from '@/assets/images/work/work-1/pic-6.jpg'
import work_pic8 from '@/assets/images/work/work-1/pic-8.jpg'
import work_pic9 from '@/assets/images/work/work-1/pic-2.jpg'
import work_pic10 from '@/assets/images/work/work-1/pic-10.jpg'
import work_pic11 from '@/assets/images/work/work-1/pic-11.jpg'
import work_pic12 from '@/assets/images/work/work-1/pic-12.jpg'
import work_pic13 from '@/assets/images/work/work-1/pic-13.jpg'
import work_pic14 from '@/assets/images/work/work-1/pic-14.jpg'
import work_pic15 from '@/assets/images/work/work-1/pic-15.jpg'
import work_pic16 from '@/assets/images/work/work-1/pic-4.jpg'
import work_pic17 from '@/assets/images/work/work-1/pic-17.jpg'
import work_pic18 from '@/assets/images/work/work-1/pic-18.jpg'
import work_pic19 from '@/assets/images/work/work-1/pic-19.jpg'
import work_pic20 from '@/assets/images/work/work-1/pic-20.jpg'
import work_pic21 from '@/assets/images/work/work-1/pic-21.jpg'

export default defineComponent({
  components: { Lightgallery },
  setup() {
    return {
      plugins: [lgThumbnail, lgZoom],
      ourBlog: [
        { img: work_pic1, setStyle: "mt-5" },
        { img: work_pic2, setStyle: "mt-5" },
        { img: work_pic3, setStyle: "mt-5" },
        { img: work_pic4, setStyle: "mt-5" },
        { img: work_pic5, setStyle: "mt-5" },
        { img: work_pic6, setStyle: "mt-5" },
        { img: work_pic8, setStyle: "mt-5" },
        { img: work_pic9, setStyle: "mt-5" },
        { img: work_pic10, setStyle: "mt-5" },
        { img: work_pic11, setStyle: "mt-5" },
        { img: work_pic12, setStyle: "mt-5" },
        { img: work_pic13, setStyle: "mt-5" },
        { img: work_pic14, setStyle: "mt-5" },
        { img: work_pic15, setStyle: "mt-5" },
        { img: work_pic16, setStyle: "mt-5" },
        { img: work_pic17, setStyle: "mt-5" },
        { img: work_pic18, setStyle: "mt-5" },
        { img: work_pic19, setStyle: "mt-5" },
        { img: work_pic20, setStyle: "mt-5" },
        { img: work_pic21, setStyle: "mt-5" },

      ],
    };
  },
});
</script>

<style scoped>
.row.g-3 {
  gap: 100px; /* Spazio tra le immagini */
  min-height: 400px;
  min-width: 300px;
}

.dz-box {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.dz-media img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dz-media img:hover {
  transform: scale(1.05);
}

.lightimg {
  cursor: pointer;
}
</style>
