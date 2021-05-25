import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Character } from '../model/character.model';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters!: Character[];
  router: any;
  character: Character = new Character()
  idCharacters = environment.privateKey

  constructor(
    private characterService : CharacterService
  ) { }

  ngOnInit() {
    this.getAllCharacters ()
  }
  getAllCharacters(){
    this.characterService.getAllCharacters().subscribe((resp : Character[])=>{
      console.log(resp)
      this.characters= resp
    }
    )
  }
  
  sair(){
    this.router.navigate()
             }
             

}
