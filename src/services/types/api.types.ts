// Tipi per le richieste generiche
export interface SendRequestModel {
  RequestType?: string
  PropertyType?: string
  Province?: string
  Location?: string
  Address?: string
  NumberRooms?: string
  NumberBedRooms?: string
  NumberServices?: string
  MQ?: string
  Garden?: boolean
  Terrace?: boolean
  Garage?: boolean
  Cellar?: boolean
  Information?: string
  Name?: string
  LastName?: string
  FromEmail?: string
  Phone?: string
  MobilePhone?: string
  Subject?: string
  Body?: string
}

// Tipi per le località
export interface Location {
  Id: number
  Name: string
  CityId: number
  CityName: string
  ProvinceId: number
  ProvinceName: string
}

// Tipi per le risposte paginate
export interface ListViewModel<T> {
  Total: number
  Data: T[]
}

// Tipi per le agenzie
export interface Agency {
  Id: string
  Name?: string
  LastName?: string
  Email?: string
  Address?: string
  Town?: string
  Region?: string
  MobilePhone?: string
  PhoneNumber?: string
  EmailConfirmed?: boolean
}

// Tipi per le proprietà immobiliari
export interface RealEstateProperty {
  Id: number
  Code?: string
  Title?: string
  Description?: string
  Price?: number
  MQ?: number
  Address?: string
  Location?: string
  Province?: string
  Status?: string
  Typologie?: string
  Photos?: RealEstatePropertyPhoto[]
  VideoUrl?: string
}

export interface RealEstatePropertyPhoto {
  Id: number
  Url: string
  IsHighlighted?: boolean
}

// Parametri per la ricerca di proprietà immobiliari
export interface GetRealEstatePropertiesParams {
  currentPage: number
  filterRequest?: string
  status?: string
  typologie?: string
  location?: string
  code?: number | null
  from?: number
  to?: number
  agencyId?: string
  city?: string
}

// Tipi per i dettagli della home
export interface HomeDetails {
  [key: string]: any
}

// Tipo per il conteggio delle proprietà
export type PropertyCount = number

