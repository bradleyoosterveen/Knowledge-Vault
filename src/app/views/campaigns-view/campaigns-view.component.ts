import { Component } from '@angular/core';
import { Campaign } from 'src/app/models/campaign';
import { CAMPAIGNS } from 'src/app/models/mock/mockCampaigns';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaigns-view',
  templateUrl: './campaigns-view.component.html',
  styleUrls: ['./campaigns-view.component.scss']
})
export class CampaignsViewComponent {
  public campaigns: Campaign[] = [];
  public createCampaignModalOpen: boolean = false;
  public clearAllDataModalOpen: boolean = false;

  constructor(
    private campaignService: CampaignService
  ) {
    this.campaigns = this.campaignService.getCampaigns();
  }

  public onCreateCampaignModalClick(): void {
    this.createCampaignModalOpen = true;
  }

  public onClearAllDataModalClick(): void {
    this.clearAllDataModalOpen = true;
  }

  onSubmitEvent(campaign: Campaign): void {
    this.createCampaignModalOpen = false;
  }

  onClearAllDataClick(): void {
    localStorage.clear();

    this.clearAllDataModalOpen = false;

    window.location.reload();
  }
}
