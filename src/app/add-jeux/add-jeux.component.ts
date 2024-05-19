import { Component, OnInit } from '@angular/core';
import { Jeux } from '../model/jeux.model';
import { JeuxService } from '../service/jeux.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jeux',
  templateUrl: './add-jeux.component.html',

})
export class AddJeuxComponent implements OnInit {
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  newJeux = new Jeux();
  constructor(private jeuxService: JeuxService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.jeuxService.listeCategories().
      subscribe(cats => {
        this.categories = cats._embedded.categories;
        console.log(cats);
      });
  }
  addJeux() {
    this.newJeux.categorie = this.categories.find(cat => cat.id == this.newIdCat)!;
    this.jeuxService.ajouterJeux(this.newJeux)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['jeux']);
      });


  }

}
