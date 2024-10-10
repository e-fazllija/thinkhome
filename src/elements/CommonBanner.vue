<template>
  <!-- <div class="slidearea bannerside"> -->
    <!-- <div class="side-contact-info">
      <ul>
        <li><i class="fas fa-phone-alt"></i> +91 123 456 7890</li>
        <li><i class="fas fa-envelope"></i> Visvainfo@gmail.com</li>
      </ul>
    </div> -->
    <div class="dz-bnr-inr style-1 overlay-left" :style="`background-image: url(${img})`">
      <div class="container-fluid">
        <div class="dz-bnr-inr-entry">
          <h1>{{ title }}</h1>
          <!-- Breadcrumb Row -->
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
              <li class="breadcrumb-item">{{ text }}</li>
            </ul>
          </nav>
          <!-- Breadcrumb Row End -->
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    img: {
      type: String as () => string,
      required: true
    },
    title: {
      type: String as () => string,
      required: true
    },
    text: {
      type: String as () => string,
      required: true
    }
  }
})
</script>

<style scoped></style>
