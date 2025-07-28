import { ref, computed } from 'vue'
import { apiService } from '@/services/apiService'
import type { Location } from '@/services/apiService'
import { cityLocations } from '@/data/locations'

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

  // Funzione per parsificare la località selezionata
  const parseLocation = (selectedLocation: string) => {
    if (!selectedLocation || selectedLocation === "Qualsiasi") return { city: null, location: null }
    
    const parts = selectedLocation.split(' / ')
    
    if (parts.length === 2) {
      // Formato: "Provincia / Città" (es. "Roma / Palestrina")
      return { city: parts[1], location: "" }
    } else if (parts.length === 3) {
      // Formato: "Provincia / Città / Località" (es. "Roma / Palestrina / Carchitti")
      return { city: parts[1], location: parts[2] }
    }
    
    // Fallback: tratta come località generica
    return { city: null, location: selectedLocation }
  }

  // Computed per le opzioni del datalist
  const locationOptions = computed(() => {
    const options: { value: string; label: string }[] = []
    
    // Set per evitare duplicati
    const uniqueValues = new Set<string>()
    
    // Aggiungi le località dal database
    const groupedLocations = locations.value.reduce((acc, location) => {
      const key = `${location.ProvinceName} - ${location.CityName}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(location)
      return acc
    }, {} as Record<string, Location[]>)

    // Aggiungi le opzioni dal database
    Object.entries(groupedLocations).forEach(([cityKey, cityLocations]) => {
      const [province, city] = cityKey.split(' - ')
      
      // Aggiungi la città principale (es. "Roma / Palestrina")
      const cityValue = `${province} / ${city}`
      if (!uniqueValues.has(cityValue)) {
        options.push({ 
          value: cityValue, 
          label: cityValue 
        })
        uniqueValues.add(cityValue)
      }
      
      // Aggiungi le località specifiche (es. "Roma / Palestrina / Carchitti")
      cityLocations.forEach(location => {
        const locationValue = `${province} / ${city} / ${location.Name}`
        if (!uniqueValues.has(locationValue)) {
          options.push({ 
            value: locationValue, 
            label: locationValue 
          })
          uniqueValues.add(locationValue)
        }
      })
    })
    
    // Aggiungi le località statiche dal file locations.ts
    Object.entries(cityLocations).forEach(([city, cityLocations]) => {
      const province = cityLocations[0]?.Province || 'Roma'
      
      // Aggiungi la città principale
      const cityValue = `${province} / ${city}`
      if (!uniqueValues.has(cityValue)) {
        options.push({ 
          value: cityValue, 
          label: cityValue 
        })
        uniqueValues.add(cityValue)
      }
      
      // Aggiungi le località specifiche
      cityLocations.forEach(location => {
        const locationValue = `${province} / ${city} / ${location.Name}`
        if (!uniqueValues.has(locationValue)) {
          options.push({ 
            value: locationValue, 
            label: locationValue 
          })
          uniqueValues.add(locationValue)
        }
      })
    })
    
    // Ordina le opzioni alfabeticamente
    options.sort((a, b) => a.label.localeCompare(b.label))
    
    return options
  })

  return {
    locations,
    loading,
    locationOptions,
    loadLocations,
    parseLocation
  }
} 