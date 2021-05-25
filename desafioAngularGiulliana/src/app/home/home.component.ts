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
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characters = []
    this.getAllCharacters()

  }
  getAllCharacters() {
    this.characterService.getAllCharacters().subscribe(resp => {

      resp.data.results.map((character: any) => {
        let current_character = new Character()
        current_character.id = character.id
        current_character.name = character.name
        current_character.description = character.description
        current_character.image = character.thumbnail.path + "." + character.thumbnail.extension
        this.characters.push(current_character)
      })


    }
    )
  }

  sair() {
    this.router.navigate()
  }


}
