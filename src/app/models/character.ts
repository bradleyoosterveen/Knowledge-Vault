import { Alignment } from "./alignment";
import { Sex } from "./sex";
import { Size } from "./size";

export interface Character {
    id: number;
    name: string;
    campaignId: number;
    race?: string;
    sex?: string;
    age?: number;
    size?: string;
    alignment?: string;
    notes?: string;
}