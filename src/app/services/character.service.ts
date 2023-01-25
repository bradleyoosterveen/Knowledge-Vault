import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { CHARACTERS } from '../models/mock/mockCharacters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characters: Character[] = CHARACTERS;

  constructor() { }

  getCharacters(): Character[] {
    return this.characters;
  }

  getCampaignCharacters(campaignId: number): Character[] {
    return this.characters.filter(character => character.campaignId === campaignId)
  }

  addCharacter(charachter: Character): Character {
    this.characters.push(charachter);

    return charachter;
  }

  getNextID(): number {
    return (Math.max(...this.characters.map(o => o.id)) + 1);
  }
}
