import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CHARACTERS } from 'src/app/models/mock/mockCharacters';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent {
  campaignId: number;
  characters: Character[] = [];
  createCharacterModalOpen: boolean = false;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {
    if (this.route.parent === null) {
      this.campaignId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.campaignId = Number(this.route.parent.snapshot.paramMap.get('id'));
    }

    this.characters = this.characterService.getCampaignCharacters(this.campaignId);
  }

  onSubmitEvent(character: Character): void {
    this.createCharacterModalOpen = false;

    this.characters = this.characterService.getCampaignCharacters(this.campaignId);
  }
}
