<template>
  <section class="property-search-form-section">
    <form class="container" @submit.prevent="handleSubmit">
      <div class="property-search-form">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title text-primary">{{ title }}</h6>
        </div>
        <div class="form-grid">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Tipologia</label>
              <select class="form-control" v-model="formData.PropertyType">
                <option value="Qualsiasi">Tipologia</option>
                <option value="Appartamento">Appartamento</option>
                <option value="Attico">Attico</option>
                <option value="Mansarda">Mansarda</option>
                <option value="Loft">Loft</option>
                <option value="Soffitta">Soffitta</option>
                <option value="Casale">Casale</option>
                <option value="Rustico">Rustico</option>
                <option value="Villa Unifamiliare">Villa Unifamiliare</option>
                <option value="Villa Bifamiliare">Villa Bifamiliare</option>
                <option value="Villa Plurifamiliare">Villa Plurifamiliare</option>
                <option value="Villa a Schiera">Villa a Schiera</option>
                <option value="Locale commerciale">Locale commerciale</option>
                <option value="Negozio">Negozio</option>
                <option value="Ufficio">Ufficio</option>
                <option value="Capannone artigianale">Capannone artigianale</option>
                <option value="Capannone industriale">Capannone industriale</option>
                <option value="Box singolo">Box singolo</option>
                <option value="Box doppio">Box doppio</option>
                <option value="Posto auto">Posto auto</option>
                <option value="Edificabile">Edificabile</option>
                <option value="Agricolo">Agricolo</option>
                <option value="Non Edificabile">Non Edificabile</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Tipologia richiesta</label>
              <select class="form-control" v-model="formData.RequestType">
                <option value="Vendita">Vendita</option>
                <option value="Affitto">Affitto</option>
                <option value="Aste">Aste</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Località</label>
              <input 
                placeholder="Cerca località..." 
                class="form-control" 
                list="datalistOptions" 
                v-model="formData.Location"
                autocomplete="off"
              />
              <datalist id="datalistOptions">
                <option v-for="option in locationOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </datalist>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Cod. Immobile</label>
              <input 
                type="number" 
                class="form-control" 
                placeholder="Inserisci codice immobile" 
                v-model="formData.Code"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Prezzo Minimo</label>
              <select class="form-control" v-model="formData.From">
                <option value="0">Prezzo Minimo</option>
                <option value="0">€ 0</option>
                <option value="50000">€ 50,000</option>
                <option value="100000">€ 100,000</option>
                <option value="150000">€ 150,000</option>
                <option value="200000">€ 200,000</option>
                <option value="250000">€ 250,000</option>
                <option value="300000">€ 300,000</option>
                <option value="350000">€ 350,000</option>
                <option value="400000">€ 400,000</option>
                <option value="450000">€ 450,000</option>
                <option value="500000">€ 500,000</option>
                <option value="550000">€ 550,000</option>
                <option value="600000">€ 600,000</option>
                <option value="650000">€ 650,000</option>
                <option value="700000">€ 700,000</option>
                <option value="750000">€ 750,000</option>
                <option value="800000">€ 800,000</option>
                <option value="850000">€ 850,000</option>
                <option value="900000">€ 900,000</option>
                <option value="950000">€ 950,000</option>
                <option value="1000000">€ 1,000,000</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Prezzo Massimo</label>
              <select class="form-control" v-model="formData.To">
                <option value="-1">Prezzo Massimo</option>
                <option value="0">€ 0</option>
                <option value="50000">€ 50,000</option>
                <option value="100000">€ 100,000</option>
                <option value="150000">€ 150,000</option>
                <option value="200000">€ 200,000</option>
                <option value="250000">€ 250,000</option>
                <option value="300000">€ 300,000</option>
                <option value="350000">€ 350,000</option>
                <option value="400000">€ 400,000</option>
                <option value="450000">€ 450,000</option>
                <option value="500000">€ 500,000</option>
                <option value="550000">€ 550,000</option>
                <option value="600000">€ 600,000</option>
                <option value="650000">€ 650,000</option>
                <option value="700000">€ 700,000</option>
                <option value="750000">€ 750,000</option>
                <option value="800000">€ 800,000</option>
                <option value="850000">€ 850,000</option>
                <option value="900000">€ 900,000</option>
                <option value="950000">€ 950,000</option>
                <option value="1000000">€ 1,000,000</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-actions">
          <button name="submit" type="submit" class="btn btn-primary btn-rounded search-btn">
            <span>Cerca</span>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useLocations } from '@/composables/useLocations'

export default defineComponent({
  name: 'PropertySearchForm',
  props: {
    title: {
      type: String,
      default: 'Trova il tuo immobile'
    },
    defaultRequestType: {
      type: String,
      default: 'Vendita'
    },
    defaultPropertyType: {
      type: String,
      default: 'Qualsiasi'
    },
    defaultLocation: {
      type: String,
      default: null
    },
    defaultCode: {
      type: Number,
      default: null
    },
    defaultFrom: {
      type: [Number, String],
      default: 0
    },
    defaultTo: {
      type: [Number, String],
      default: -1
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const { locationOptions, loadLocations, parseLocation } = useLocations()
    
    const formData = ref({
      RequestType: props.defaultRequestType,
      PropertyType: props.defaultPropertyType,
      Location: props.defaultLocation,
      Code: props.defaultCode,
      From: props.defaultFrom,
      To: props.defaultTo
    })

    // Watch per aggiornare formData quando cambiano le props
    watch(() => props.defaultRequestType, (newVal) => {
      formData.value.RequestType = newVal
    })
    watch(() => props.defaultPropertyType, (newVal) => {
      formData.value.PropertyType = newVal
    })
    watch(() => props.defaultLocation, (newVal) => {
      formData.value.Location = newVal
    })

    const handleSubmit = () => {
      emit('submit', {
        ...formData.value,
        parseLocation
      })
    }

    return {
      locationOptions,
      loadLocations,
      formData,
      handleSubmit
    }
  },
  async mounted() {
    await this.loadLocations()
  }
})
</script>

<style>
@import '@/assets/css/property-search-form.css';
</style>

