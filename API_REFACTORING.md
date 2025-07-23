# Refactoring API e Località

## Modifiche Apportate

### 1. Configurazione API Centralizzata

Creato il file `src/config/api.ts` per centralizzare il base URL delle API:
```typescript
export const API_BASE_URL = 'https://thinkhomebe.azurewebsites.net/api'
```

### 2. Servizio API Centralizzato

Creato il file `src/services/apiService.ts` che contiene:
- Interfaccia `Location` per le località dal database
- Metodi centralizzati per tutte le chiamate API:
  - `getLocations()` - Recupera le località dal database
  - `getHomeDetails()` - Recupera i dettagli della home
  - `getPropertyCount()` - Recupera il conteggio delle proprietà
  - `getRealEstateProperties()` - Recupera le proprietà immobiliari

### 3. Composable per le Località

Creato il file `src/composables/useLocations.ts` che:
- Gestisce il caricamento delle località dal database
- Fornisce le opzioni formattate per i datalist
- Raggruppa le località per provincia e città

### 4. Modifiche ai Componenti

#### Home.vue
- Sostituito `axios` con `apiService`
- Sostituito `cityLocations` hardcoded con `useLocations()`
- Aggiunto caricamento delle località dal database

#### RentList.vue
- Sostituito `axios` con `apiService`
- Sostituito `cityLocations` hardcoded con `useLocations()`
- Aggiunto caricamento delle località dal database
- Corretto errore di sintassi nell'option "Non Edificabile"

#### SaleList.vue
- Sostituito `axios` con `apiService`
- Sostituito `cityLocations` hardcoded con `useLocations()`
- Aggiunto caricamento delle località dal database

#### AuctionsList.vue
- Sostituito `axios` con `apiService`
- Sostituito `cityLocations` hardcoded con `useLocations()`
- Aggiunto caricamento delle località dal database

## Vantaggi

1. **Centralizzazione**: Tutte le chiamate API sono ora centralizzate in un unico servizio
2. **Manutenibilità**: Modifiche al base URL richiedono solo un cambio in un file
3. **Type Safety**: Interfacce TypeScript per le località
4. **Riutilizzabilità**: Il composable `useLocations` può essere utilizzato in qualsiasi componente
5. **Database Integration**: Le località vengono ora caricate dinamicamente dal database

## Struttura delle Località

Le località dal database devono avere la seguente struttura:
```typescript
interface Location {
  Id: string
  Name: string
  Province: string
  City: string
}
```

Il sistema raggruppa automaticamente le località per provincia e città, mostrando:
- Città principale: "Roma (Roma)"
- Località specifiche: "Roma - Centro Storico (Roma)"

## Endpoint API Implementati

Il backend fornisce l'endpoint:
- `GET /api/Generic/GetLocations` - Restituisce l'array delle località dal database

## Struttura delle Località dal Database

Le località dal database hanno la seguente struttura:
```typescript
interface Location {
  Id: number
  Name: string
  CityId: number
  CityName: string
  ProvinceId: number
  ProvinceName: string
}
```

## Seeder delle Località

Il backend include un seeder automatico che popola il database con:
- Province italiane
- Città per ogni provincia
- Località specifiche per ogni città

Il seeder viene eseguito automaticamente all'avvio dell'applicazione se il database è vuoto.

## Modifiche al Backend

### GenericController
- Aggiunto endpoint `GetLocations()` che restituisce tutte le località dal database

### GenericService
- Aggiunto metodo `GetLocations()` che utilizza il `LocationServices`
- Aggiunta iniezione del servizio `ILocationServices`

### IGenericService
- Aggiunta interfaccia per il metodo `GetLocations()` 