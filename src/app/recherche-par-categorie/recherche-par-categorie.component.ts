import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Jeux } from '../model/jeux.model';
import { JeuxService } from '../service/jeux.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',

})
export class RechercheParCategorieComponent implements OnInit {

  jeu!: Jeux[];
  IdCategorie!: number;
  categories!: Categorie[];

  constructor(private jeuxService: JeuxService) {

  }

  ngOnInit(): void {
    this.jeuxService.listeCategories().
      subscribe(cats => {
        this.categories = cats._embedded.categories;
        console.log(cats);
      });
  }

  onChange() { 
    this.jeuxService.rechercherParCategorie(this.IdCategorie).
subscribe(j =>{this.jeu=j});

  }

}
