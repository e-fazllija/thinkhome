<template>
  <nav aria-label="Blog Pagination">
    <ul class="pagination text-center m-b30">
      <li class="page-item">
        <button v-if="currentPage! > 1" class="page-link prev" @click="newPageClick(currentPage! - 1)"><i class="la la-angle-left"></i></button>
      </li>
      <li v-for="page in totalPages" :key="page" class="page-item">
        <button class="page-link" :class="currentPage! == page ? 'active' : ''" @click="newPageClick(page)">{{ page }}</button>
      </li>
      <li v-if="currentPage! < totalPages!" class="page-item">
        <button class="page-link next" @click="newPageClick(currentPage! + 1)"><i class="la la-angle-right"></i></button>
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
    // console.log(this.currentPage!)
    // console.log(this.totalPages)
  },
  methods: {
  newPageClick(newpage: number) {
    this.$emit('changePage', newpage, this.filter, this.typologie, this.location, this.code, this.from, this.to);
    window.scrollTo({
      top: 920,          
      behavior: 'smooth' 
    });
  }
}
  })
</script>

<style scoped></style>
