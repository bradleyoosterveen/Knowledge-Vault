import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { AlertService } from 'src/app/services/alert.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent {
  campaignId: number;
  characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    private _alertService: AlertService
  ) {
    if (this.route.parent === null) {
      this.campaignId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.campaignId = Number(this.route.parent.snapshot.paramMap.get('id'));
    }

    this.characters = this.characterService.getCampaignCharacters(this.campaignId);
  }

  onCreateCharacterClick(): void {
    let id = this.characterService.getNextID();

    this.characterService.addCharacter({
      id: id,
      campaignId: this.campaignId,
      name: `Character ${id}`,
    });

    this._alertService.success('Character created');

    this.router.navigate([id], {relativeTo: this.route});
  }
}
