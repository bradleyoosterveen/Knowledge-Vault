import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent {
  confirmCharacterDeletionModalOpen: boolean = false;
  public character: Character;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
    let id: number = Number(this.route.snapshot.paramMap.get('characterid'));

    this.character = this.characterService.getCharacter(id);
  }

  onCharacterDeleteClick(): void {
    this.characterService.deleteCharacter(this.character);

    this.router.navigate(['campaign', Number(this.route.parent?.snapshot.paramMap.get('id')), 'characters']);
  }
}
