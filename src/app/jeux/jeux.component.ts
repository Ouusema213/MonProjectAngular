import { Component, OnInit } from '@angular/core';
import { Jeux } from '../model/jeux.model';
import { JeuxService } from '../service/jeux.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',

})
export class JeuxComponent implements OnInit {

  jeu?: Jeux[];


  constructor(private jeuxService: JeuxService ,public authService: AuthService ) {
    // this.jeux = jeuxService.listeJeux();
  }



  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {

    this.jeuxService.listeJeux().subscribe(j => {
      console.log(j);
      this.jeu = j;
    });
  }

   supprimerJeux(j: Jeux) {
     let conf = confirm("Etes-vous sûr ?");
     if (conf)
       this.jeuxService.supprimerJeux(j.id).subscribe(() => {
         console.log("jeux supprimé");
         this.chargerProduits();
      });
   }


}
