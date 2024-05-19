import { Component, OnInit } from '@angular/core';
import { Jeux } from '../model/jeux.model';
import { JeuxService } from '../service/jeux.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  
})
export class RechercheParNomComponent implements OnInit {
  nomJeux! : string ;
  jeu!: Jeux[];
  allJeux! : Jeux[];
  searchTerm! : string;


  constructor(private jeuxService: JeuxService){

  }



  ngOnInit(): void {
    this.jeuxService.listeJeux().subscribe(prods => {
      console.log(prods);
      this.jeu = prods;
      });
      
  }
  // rechercherJeux(){
  //   this.jeuxService.rechercherParNom(this.nomJeux).subscribe(j => {this.jeu=j}) ;
  // }
  onKeyUp(filterText : string){
    this.jeu = this.allJeux.filter(item =>
    item.nom.toLowerCase().includes(filterText));
    }
 
}
