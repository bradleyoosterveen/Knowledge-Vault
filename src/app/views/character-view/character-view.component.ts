import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent {
  public character: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
    let id: number = Number(this.route.snapshot.paramMap.get('characterid'));

    this.character = this.characterService.getCharacter(id);
  }
}
