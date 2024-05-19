import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { JeuxService } from '../service/jeux.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',

})
export class ListeCategoriesComponent implements OnInit {

  categories!: Categorie[];
  ajout: boolean = true;


  updatedCat: Categorie = { "id": 0, "nomC": "" };

  constructor(private jeuxService: JeuxService) { }
  ngOnInit(): void {
    this.jeuxService.listeCategories().
      subscribe(cats => {
        this.categories = cats._embedded.categories;
        console.log(cats);
      });

  }
  categorieUpdated(cat: Categorie) {
    console.log("Cat updated event", cat);
    this.jeuxService.ajouterCategorie(cat).
      subscribe(() => this.chargerCategories());
  }
  chargerCategories() {
    this.jeuxService.listeCategories().
      subscribe(cats => {
        this.categories = cats._embedded.categories;
        console.log(cats);
      });
  }
  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }

}
