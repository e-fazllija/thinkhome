<template>
  <nav aria-label="Blog Pagination">
    <ul class="pagination text-center m-b30">
      <li class="page-item">
        <button v-if="currentPage > 1" class="page-link prev" @click="$emit('changePage', currentPage - 1, filter, typologie)"><i class="la la-angle-left"></i></button>
      </li>
      <li v-for="page in totalPages" :key="page" class="page-item">
        <button class="page-link" :class="currentPage == page ? 'active' : ''" @click="$emit('changePage', page, filter, typologie)">{{ page }}</button>
      </li>
      <li v-if="currentPage < totalPages" class="page-item">
        <button class="page-link next" @click="$emit('changePage', currentPage + 1, filter, typologie)"><i class="la la-angle-right"></i></button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'blog_pagination',
  props: { 
    totalPages: Number,
    currentPage: Number,
    filter: String,
    typologie: String
  },
  setup() {
    return {}
  },
  components: { RouterLink },
  async mounted(){
    // console.log(this.currentPage)
    // console.log(this.totalPages)
  }
})
</script>

<style scoped></style>
