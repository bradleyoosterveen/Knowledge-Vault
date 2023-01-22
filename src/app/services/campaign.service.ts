import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CAMPAIGNS } from '../models/mock/mockCampaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() {}

  public getCampaigns(): Campaign[] {
    return CAMPAIGNS;
  }

  public getCampaign(id: number): Campaign {
    let campaigns: Campaign[] = this.getCampaigns();

    let campaign: Campaign | undefined = campaigns.find(x => x.id === id);

    if (!campaign) throw new Error("Could not find campaign");

    return campaign;
  }
}
