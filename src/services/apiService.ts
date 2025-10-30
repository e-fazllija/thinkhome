import apiClient from './apiClient'
import type {
  Location,
  SendRequestModel,
  RealEstateProperty,
  GetRealEstatePropertiesParams,
  HomeDetails,
  PropertyCount,
  ListViewModel,
  Agency,
} from './types/api.types'

/**
 * Servizio centralizzato per tutte le chiamate API al backend
 * Organizzato per controller del backend
 */
export const apiService = {
  // ==================== GENERIC CONTROLLER ====================

  /**
   * Ottiene i dettagli della home page
   */
  async getHomeDetails(): Promise<HomeDetails> {
    const response = await apiClient.get<HomeDetails>('/Generic/GetHomeDetails')
    return response.data
  },

  /**
   * Ottiene tutte le località disponibili
   */
  async getLocations(): Promise<Location[]> {
    try {
      const response = await apiClient.get<Location[]>('/Generic/GetLocations')
      return response.data
    } catch (error) {
      console.error('Errore nel recupero delle località:', error)
      return []
    }
  },

  /**
   * Invia una richiesta di valutazione immobile
   */
  async sendEvaluationRequest(formData: SendRequestModel): Promise<void> {
    await apiClient.post('/Generic/SendEvaluationRequest', formData)
  },

  /**
   * Invia una richiesta generica
   */
  async sendRequest(formData: SendRequestModel): Promise<void> {
    await apiClient.post('/Generic/SendRequest', formData)
  },

  /**
   * Invia una richiesta "Lavora con noi"
   */
  async workWithUs(formData: SendRequestModel): Promise<void> {
    await apiClient.post('/Generic/WorkWithUs', formData)
  },

  /**
   * Invia una richiesta di informazioni
   */
  async informationRequest(formData: SendRequestModel): Promise<void> {
    await apiClient.post('/Generic/InformationRequest', formData)
  },

  /**
   * Invia un reclamo
   */
  async sendComplaint(formData: SendRequestModel): Promise<void> {
    await apiClient.post('/Generic/SendComplaint', formData)
  },

  // ==================== AGENCIES CONTROLLER ====================

  /**
   * Ottiene l'elenco delle agenzie principali (pubblicato)
   */
  async getAgencies(page: number = 1): Promise<ListViewModel<Agency>> {
    const response = await apiClient.get<ListViewModel<Agency>>(
      `/Agencies/GetMain?currentPage=${page}`
    )
    return response.data
  },

  /**
   * Ottiene un'agenzia per ID
   */
  async getAgencyById(id: string): Promise<Agency> {
    const response = await apiClient.get<Agency>(`/Agencies/GetById?id=${id}`)
    return response.data
  },

  // ==================== REAL ESTATE PROPERTY CONTROLLER ====================

  /**
   * Ottiene il conteggio totale delle proprietà immobiliari
   */
  async getPropertyCount(): Promise<PropertyCount> {
    const response = await apiClient.get<PropertyCount>(
      '/RealEstateProperty/GetPropertyCount'
    )
    return response.data
  },

  /**
   * Ottiene le proprietà immobiliari con filtri e paginazione
   */
  async getRealEstateProperties(
    params: GetRealEstatePropertiesParams
  ): Promise<ListViewModel<RealEstateProperty>> {
    const {
      currentPage,
      filterRequest = '',
      status = '',
      typologie = '',
      location = '',
      code = null,
      from = 0,
      to = -1,
      agencyId = '',
      city = '',
    } = params

    // Costruisce l'URL con i parametri di query
    const queryParams = new URLSearchParams()
    queryParams.append('currentPage', currentPage.toString())
    if (filterRequest) queryParams.append('filterRequest', filterRequest)
    if (status) queryParams.append('status', status)
    if (typologie) queryParams.append('typologie', typologie)
    if (location) queryParams.append('location', location)
    if (code !== null) queryParams.append('code', code.toString())
    queryParams.append('from', from.toString())
    queryParams.append('to', to.toString())
    if (agencyId) queryParams.append('agencyId', agencyId)
    if (city) queryParams.append('city', city)

    const response = await apiClient.get<ListViewModel<RealEstateProperty>>(
      `/RealEstateProperty/GetMain?${queryParams.toString()}`
    )
    return response.data
  },

  /**
   * Ottiene una proprietà immobiliare per ID
   */
  async getRealEstatePropertyById(id: number): Promise<RealEstateProperty> {
    const response = await apiClient.get<RealEstateProperty>(
      `/RealEstateProperty/GetById?id=${id}`
    )
    return response.data
  },
}

// Esporta i tipi per uso esterno
export type {
  Location,
  SendRequestModel,
  RealEstateProperty,
  GetRealEstatePropertiesParams,
  HomeDetails,
  PropertyCount,
  ListViewModel,
  Agency,
} from './types/api.types'

export default apiService