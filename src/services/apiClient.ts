import axios, { type AxiosInstance, AxiosError, type AxiosResponse } from 'axios'
import { API_BASE_URL } from '@/config/api'

// Interfaccia per le risposte di errore standard del backend
export interface ApiErrorResponse {
  Status: string
  Message: string
}

// Classe per errori API personalizzati
export class ApiError extends Error {
  status?: number
  statusText?: string
  response?: AxiosResponse<ApiErrorResponse>

  constructor(message: string, status?: number, statusText?: string, response?: AxiosResponse<ApiErrorResponse>) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.statusText = statusText
    this.response = response
  }
}

// Crea un'istanza axios configurata
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor per le richieste
apiClient.interceptors.request.use(
  (config) => {
    // Qui puoi aggiungere token di autenticazione, logging, ecc.
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor per le risposte
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<ApiErrorResponse>) => {
    // Gestione centralizzata degli errori
    if (error.response) {
      // Il server ha risposto con uno status code fuori dal range 2xx
      const apiError = new ApiError(
        error.response.data?.Message || error.message || 'Errore sconosciuto',
        error.response.status,
        error.response.statusText,
        error.response
      )
      console.error('Errore API:', apiError)
      return Promise.reject(apiError)
    } else if (error.request) {
      // La richiesta è stata fatta ma non c'è risposta
      const apiError = new ApiError('Nessuna risposta dal server. Controlla la connessione.')
      console.error('Errore di connessione:', apiError)
      return Promise.reject(apiError)
    } else {
      // Qualcosa è andato storto nella configurazione della richiesta
      const apiError = new ApiError(error.message || 'Errore nella configurazione della richiesta')
      console.error('Errore di configurazione:', apiError)
      return Promise.reject(apiError)
    }
  }
)

export default apiClient
