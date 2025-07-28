import axios from 'axios'
import { API_BASE_URL } from '@/config/api'

// Interfaccia per le località dal database
export interface Location {
  Id: number
  Name: string
  CityId: number
  CityName: string
  ProvinceId: number
  ProvinceName: string
}

// Servizio per le chiamate API
export const apiService = {
  // Chiamata per ottenere le località dal database
  async getLocations(): Promise<Location[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/Generic/GetLocations`)
      return response.data
    } catch (error) {
      console.error('Errore nel recupero delle località:', error)
      return []
    }
  },

  // Chiamata per ottenere i dettagli della home
  async getHomeDetails() {
    const response = await axios.get(`${API_BASE_URL}/Generic/GetHomeDetails`)
    return response.data
  },

  // Chiamata per ottenere il conteggio delle proprietà
  async getPropertyCount() {
    const response = await axios.get(`${API_BASE_URL}/RealEstateProperty/GetPropertyCount`)
    return response.data
  },

  // Chiamata per ottenere le proprietà immobiliari
  async getRealEstateProperties(params: {
    currentPage: number
    filterRequest: string
    status: string
    typologie: string
    location: string
    code: number
    from: number
    to: number
    agencyId?: string
    city?: string
  }) {
    const { currentPage, filterRequest, status, typologie, location, code, from, to, agencyId, city } = params
    const response = await axios.get(
      `${API_BASE_URL}/RealEstateProperty/GetMain?currentPage=${currentPage}&filterRequest=${filterRequest}&status=${status}&typologie=${typologie}&location=${location}&code=${code}&from=${from}&to=${to}&agencyId=${agencyId ?? ""}&city=${city ?? ""}`
    )
    return response.data
  }
} 