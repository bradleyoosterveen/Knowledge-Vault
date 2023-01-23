import { Tag } from "./tag";

export interface Campaign {
    id: number;
    name: string;
    description?: string;
    bannerURL: string;
    tags?: Tag[];
}
