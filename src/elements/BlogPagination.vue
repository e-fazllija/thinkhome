<template>
  <nav aria-label="Blog Pagination">
    <ul class="pagination text-center m-b30">
      <li v-if="currentPage! > 1" class="page-item">
       <button  class="page-link prev" 
       @click="newPageClick(1)">
       <i class="la la-angle-double-left"></i> <!-- Doppia freccia per la prima pagina -->
       </button>
      </li>
      <!-- Pulsante pagina precedente -->
      <li class="page-item">
        <button 
          v-if="currentPage! > 1" 
          class="page-link prev" 
          @click="newPageClick(currentPage! - 1)">
          <i class="la la-angle-left"></i>
        </button>
      </li>
      <!-- Range delle pagine -->
      <li 
        v-for="page in visiblePages" 
        :key="page" 
        class="page-item">
        <button 
          class="page-link" 
          :class="currentPage! == page ? 'active' : ''" 
          @click="newPageClick(page)">
          {{ page }}
        </button>
      </li>
      <!-- <li v-if="currentPage! < totalPages!" class="page-item">
       <button   class="page-link" 
       @click="newPageClick(totalPages!)">
       {{ totalPages }}
      </button>
     </li> -->
      <!-- Pulsante pagina successiva -->
      <li v-if="currentPage! < totalPages!" class="page-item">
        <button 
          class="page-link next" 
          @click="newPageClick(currentPage! + 1)">
          <i class="la la-angle-right"></i>
        </button>
      </li>
      <li v-if="currentPage! < totalPages!" class="page-item">
        <button  class="page-link next" 
        @click="newPageClick(totalPages!)">
        <i class="la la-angle-double-right"></i> <!-- Doppia freccia -->
        </button>
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
    typologie: String,
    location: String,
    code: [String, Number],
    from: [String, Number],
    to: [String, Number],
    agencyId: [String, Number],
  },
  setup() {
    return {} 
  },
  components: { RouterLink },
  computed: {
    visiblePages(): number[] {
      const start = Math.max(1, this.currentPage! - 2); // Inizio del range
      const end = Math.min(this.totalPages!, this.currentPage! + 2); // Fine del range
      const pages: number[] = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    newPageClick(newpage: number) {
      this.$emit('changePage', newpage);
      window.scrollTo({
        top: 500,          
        behavior: 'smooth' 
      });
    }
  }
})
</script>

<style scoped></style>
