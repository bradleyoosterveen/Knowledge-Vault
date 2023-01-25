import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CAMPAIGNS } from '../models/mock/mockCampaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly _key: string = 'campaigns';

  campaigns: Campaign[] = [];

  constructor() {}

  getCampaigns(): Campaign[] {
    let data = JSON.parse(localStorage.getItem(this._key) || "{}");

    if (Array.isArray(data))
      this.campaigns = data;

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

    localStorage.setItem(this._key, JSON.stringify(this.campaigns));

    return campaign;
  }

  getNextID(): number {
    if (this.campaigns.length === 0)
      return 1;

    return (Math.max(...this.campaigns.map(o => o.id)) + 1);
  }
}
