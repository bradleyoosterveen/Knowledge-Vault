import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Campaign } from '../models/campaign';
import { CAMPAIGNS } from '../models/mock/mockCampaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly _key: string = 'campaigns';

  campaigns: Campaign[] = [];

  updated = new Subject<Campaign>();

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

    this._updateStorage();

    return campaign;
  }

  deleteCampaign(campaign: Campaign): Campaign {
    let campaigns: Campaign[] = this.getCampaigns();

    this.campaigns = campaigns.filter(c => c.id !== campaign.id);

    this._updateStorage();

    return campaign;
  }

  updateCampaign(campaign: Campaign): Campaign {
    this.deleteCampaign(campaign);
    this.addCampaign(campaign);

    this.updated.next(campaign);

    return campaign;
  }

  getNextID(): number {
    if (this.campaigns.length === 0)
      return 1;

    return (Math.max(...this.campaigns.map(o => o.id)) + 1);
  }

  private _updateStorage() {
    localStorage.setItem(this._key, JSON.stringify(this.campaigns));
  }
}
