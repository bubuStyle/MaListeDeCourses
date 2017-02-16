import { Injectable } from '@angular/core';

// Importer le système de promesse :
import 'rxjs/add/operator/toPromise';

// Créer et exporter une collection de données :
export const LIST = [
  {
    category: '',
    nom: '',
    comment: '',
    option: ''
  }
];

@Injectable()
export class ServicesService {

  constructor() { }

  // Créer une fonction pour envoyer la liste des étudiants :
  showList(): Promise<any[]>{

    // Renvoyer le contenu de LIST :
    return Promise.resolve(LIST);

  }

}
