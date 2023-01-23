import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CAMPAIGNS } from '../models/mock/mockCampaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  campaigns: Campaign[] = CAMPAIGNS;

  constructor() {}

  getCampaigns(): Campaign[] {
    return this.campaigns;
  }

  getCampaign(id: number): Campaign {
    let campaigns: Campaign[] = this.getCampaigns();

    let campaign: Campaign | undefined = campaigns.find(x => x.id === id);

    if (!campaign) throw new Error("Could not find campaign");

    return campaign;
  }

  addCampaign(campaign: Campaign): Campaign {
    this.campaigns.push(campaign);

    return campaign;
  }

  getNextID(): number {
    return (Math.max(...this.campaigns.map(o => o.id)) + 1);
  }
}
