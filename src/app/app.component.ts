import { Component, OnInit } from '@angular/core';
// 1) Importer la class du service :
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // 2) Ajouter le service dans le tableau des providers :
  providers: [ServicesService]
})
export class AppComponent implements OnInit {
  // Créer une variable pour récup les données du service :
  myList: any[];
  // 3) Définir une variable pour utiliser le service :
  constructor(
    private servicesService: ServicesService
  ) {}

  // Créer une fonction pour récupérer la liste des étudiants :
  getStudentFromService(){
    this.servicesService.showList().then( data => this.myList = data );
  }

  ngOnInit() {}
}
