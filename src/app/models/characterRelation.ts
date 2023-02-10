import { Character } from "./character";

export interface CharacterRelation {
    characterA: Character;
    aToBDescription?: string;
    characterB: Character;
    bToADescription?: string;
}