import { Component } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CHARACTERS } from 'src/app/models/mock/mockCharacters';
import { TAGS } from 'src/app/models/mock/mockTags';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent {
  characters: Character[] = CHARACTERS;
  tags: Tag[] = TAGS;
}
