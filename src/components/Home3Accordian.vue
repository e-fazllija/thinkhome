<template>
  <section class="content-inner-2" :style="`background-image: url(${bg1});`">
      <div class="container">
        <div class="row section-head-bx align-items-center">
          <div class="col-md-8">
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">IL NOSTRO PORTAFOGLIO</h6>
              <h2 class="title">ULTIMI PROGETTI</h2>
            </div>
          </div>
          <!-- <div class="col-md-4 text-start text-md-end mb-4 mb-md-0">
            <RouterLink to="/portfolio" class="btn-link"
              >See All Projects <i class="fas fa-plus scale08"></i
            ></RouterLink>
          </div> -->
        </div>
      </div>
      <!-- <OurPortfolio /> -->
    </section>
  <OurPortfolio />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OurPortfolio from '@/components/OurPortfolio.vue'
import bg1 from '@/assets/images/background/bg1.png'

export default defineComponent({
  name: 'accordian_',
  components: {OurPortfolio },

  setup() {
    return {bg1}
  }
})
</script>

<style scoped></style>
