import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character.model';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters!: Character[];

  constructor(
    private characterService : CharacterService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters()
  }
  getAllCharacters(){
    this.characterService.getAllCharacters().subscribe((resp : Character[])=>{
      this.characters= resp
    }
    )
  }

}
