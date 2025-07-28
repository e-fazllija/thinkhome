<template>
  <section class="content-inner-2" :style="`background-image: url(${bg1});`">
      <div class="container">
        <div class="row section-head-bx align-items-center">
          <div class="col-md-5">
            <div class="section-head style-1">
              <h6 class="sub-title text-primary">IL NOSTRO PORTAFOGLIO</h6>
              <h2 class="title">ULTIMI PROGETTI</h2>
              <RouterLink to="/edilizia" class="btn-link">
               <h6 class="title">Scopri di più <i class="fas fa-plus scale08"></i></h6>
               </RouterLink> 
             </div>
          </div>
          <!-- <div class="col-md-7 text-start  mb-4 mb-md-0"> -->
            <!-- <RouterLink to="/portfolio" class="btn-link"
              ><h6 class="title">SCOPRI DI PIU'</h6></RouterLink> -->
              <!-- <RouterLink to= "/edilizia" class="btn-link" ><h4 class="title">SCOPRI DI PIU'</h4> <i class="fas fa-plus scale08"></i> </RouterLink> -->
        <!-- </div> -->
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

<style scoped>
.btn-link h6{
  color: #c3a47c; /* Colore iniziale */
}

.btn-link:hover h6{
  color: #25606f; /* Colore al passaggio del mouse */
}
</style>
