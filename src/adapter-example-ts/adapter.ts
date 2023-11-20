// Interfaz antigua
interface OldService {
  fetchData(): string
}

// Nueva interfaz
interface NewService {
  retrieveData(): string
}

class getDataNew implements NewService {
  retrieveData(): string {
    return 'data'
  }
}

/**
 *
 * we create an adapter (Adapter) that implements the OldService interface
 * but internally uses the NewService interface to get the data
 * 
 */

// Adaptador
class Adapter implements OldService {
  private newService: NewService

  constructor(newService: NewService) {
    this.newService = newService
  }

  fetchData(): string {
    // Adaptar la llamada al nuevo método
    return this.newService.retrieveData()
  }
}

// Uso del adaptador
const newService: NewService = new getDataNew()
const adapter: OldService = new Adapter(newService)

// Llamada al método antiguo sin preocuparse por la nueva interfaz
const data = adapter.fetchData()
console.log(data)
