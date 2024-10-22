<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg-6 content-inner-1 aos-item">
        <div class="section-head style-1">
          <h6 class="sub-title text-primary">OUR STRATEGY</h6>
          <h2 class="title text-white m-b20">Distinctive Interior For Special Ideas</h2>
          <p>
            Fusce accumsan felis sed purus sollicitudin posuere. Vivamus id pharetra augue.
            Phasellus molestie ornare lacus mattis iaculis. Nulla dui dui, convallis et venenatis
            id, condimentum ut justo.
          </p>
        </div>
        <div
          :class="`progress-bx style-2 ${setStyle}`"
          v-for="({ tittle, text, setStyle }, ind) in progressBar"
          :key="ind"
        >
          <div class="progress-info">
            <h4 class="title text-white">{{ tittle }}</h4>
            <h4 class="progress-value text-white">{{ text }}</h4>
          </div>
          <div class="progress">
            <div class="progress-bar" :style="`width: ${text}`"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 aos-item">
        <div class="content-media right">
          <img src="@/assets/images/video/pic2-1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      progressBar: [
        { tittle: 'Architecture', text: '90%', setStyle: 'm-b40' },
        { tittle: '3D Design', text: '80%', setStyle: 'm-b40' },
        { tittle: 'Interior Design', text: '95%' }
      ]
    }
  }
})
</script>

<style scoped></style>
