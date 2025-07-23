import { ref, computed } from 'vue'
import { apiService } from '@/services/apiService'
import type { Location } from '@/services/apiService'

export function useLocations() {
  const locations = ref<Location[]>([])
  const loading = ref(false)

  // Carica le località dal database
  const loadLocations = async () => {
    loading.value = true
    try {
      locations.value = await apiService.getLocations()
    } catch (error) {
      console.error('Errore nel caricamento delle località:', error)
    } finally {
      loading.value = false
    }
  }

  // Computed per le opzioni del datalist
  const locationOptions = computed(() => {
    const options: { value: string; label: string }[] = []
    
    // Raggruppa per provincia e città
    const groupedLocations = locations.value.reduce((acc, location) => {
      const key = `${location.ProvinceName} - ${location.CityName}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(location)
      return acc
    }, {} as Record<string, Location[]>)

    // Aggiungi le opzioni raggruppate
    Object.entries(groupedLocations).forEach(([cityKey, cityLocations]) => {
      // Aggiungi la città principale
      const [province, city] = cityKey.split(' - ')
      options.push({ 
        value: city, 
        label: `${city} (${province})` 
      })
      
      // Aggiungi le località specifiche
      cityLocations.forEach(location => {
        options.push({ 
          value: location.Name, 
          label: `${city} - ${location.Name} (${province})` 
        })
      })
    })
    
    return options
  })

  return {
    locations,
    loading,
    locationOptions,
    loadLocations
  }
} 