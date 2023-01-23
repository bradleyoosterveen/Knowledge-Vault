import { Component } from '@angular/core';
import { Campaign } from 'src/app/models/campaign';
import { CAMPAIGNS } from 'src/app/models/mock/mockCampaigns';

@Component({
  selector: 'app-campaigns-view',
  templateUrl: './campaigns-view.component.html',
  styleUrls: ['./campaigns-view.component.scss']
})
export class CampaignsViewComponent {
  public campaigns: Campaign[] = CAMPAIGNS;

  public createCampaignModalOpen: boolean = false;

  public onCreateCampaignModalClick(): void {
    this.createCampaignModalOpen = true;
  }

  onSubmitEvent(campaign: Campaign): void {
    this.createCampaignModalOpen = false;
  }
}
