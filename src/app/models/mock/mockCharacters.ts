import { Character } from "../character";
import { CAMPAIGNS } from "./mockCampaigns";

export const CHARACTERS: Character[] = [
    {id: 1, name: "Enwynn Wolphes", race: "Elf", campaignId: CAMPAIGNS[0].id},
    {id: 2, name: "Rök", race: "Human", campaignId: CAMPAIGNS[0].id},
    {id: 3, name: "Balfurs the Singer", race: "Human", campaignId: CAMPAIGNS[2].id}
];