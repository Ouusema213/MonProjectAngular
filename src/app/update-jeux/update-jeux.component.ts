import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jeux } from '../model/jeux.model';
import { JeuxService } from '../service/jeux.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-jeux',
  templateUrl: './update-jeux.component.html',

})
export class UpdateJeuxComponent implements OnInit {

  currentJeux = new Jeux();

  categories!: Categorie[];
  updatedCatId?: number;


  constructor(private activatedRoute: ActivatedRoute,
    private jeuxService: JeuxService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.jeuxService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    this.jeuxService.consulterJeux(this.activatedRoute.snapshot.params['id']).
    subscribe( j =>{ this.currentJeux = j;
    this.updatedCatId =
    this.currentJeux.categorie.id;
    } ) ;
        }
        
      
    


  

  updateJeux() {
    this.currentJeux.categorie = this.categories.
      find(cat => cat.id == this.updatedCatId)!;
    this.jeuxService.updateJeux(this.currentJeux).subscribe(prod => {
      this.router.navigate(['jeux']);
    }
    );
  }


}
