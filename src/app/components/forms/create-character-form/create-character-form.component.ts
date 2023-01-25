import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-create-character-form',
  templateUrl: './create-character-form.component.html',
  styleUrls: ['./create-character-form.component.scss']
})
export class CreateCharacterFormComponent {
  @Output() submitEvent = new EventEmitter<Character>();

  campaignId: number;

  form!: FormGroup;
  initialFormValues: any;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      race: new FormControl(null, [
        Validators.required
      ]),
    });

    if (this.route.parent === null) {
      this.campaignId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.campaignId = Number(this.route.parent.snapshot.paramMap.get('id'));
    }
  }

  onSubmit(): void {
    if (!this.form.valid)
      return;

    let character: Character = {
      id: this.characterService.getNextID(),
      name: this.form.get('name')?.value || '',
      race: this.form.get('race')?.value || '',
      campaignId: this.campaignId
    };

    this.characterService.addCharacter(character);

    this.submitEvent.emit(character);

    this.form.reset(this.initialFormValues);
  }

  onResetToDefaultsClick(): void {
    this.form.reset(this.initialFormValues);
  }
}
