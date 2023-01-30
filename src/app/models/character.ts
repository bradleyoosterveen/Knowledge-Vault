import { Alignment } from "./alignment";
import { Sex } from "./sex";
import { Size } from "./size";

export interface Character {
    id: number;
    name: string;
    campaignId: number;
    race?: string;
    sex?: Sex;
    age?: number;
    size?: Size;
    alignment?: Alignment;
    notes?: string;
}