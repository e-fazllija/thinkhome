<template>
  <div :class="['loader-container', { 'loader-fullscreen': fullscreen, 'loader-inline': !fullscreen }]">
    <div class="loader-spinner-container">
      <div class="loader-spinner" role="status">
        <div class="spinner-border" role="status">
          <span class="sr-only">{{ loadingText }}</span>
        </div>
        <p v-if="showText" class="loader-text">{{ loadingText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@/assets/css/loader.css'

export default defineComponent({
  name: 'Loader',
  props: {
    fullscreen: {
      type: Boolean,
      default: true
    },
    showText: {
      type: Boolean,
      default: true
    },
    loadingText: {
      type: String,
      default: 'Caricamento in corso...'
    }
  }
})
</script>
