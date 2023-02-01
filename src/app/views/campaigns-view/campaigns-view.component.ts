import { Component } from '@angular/core';
import { Campaign } from 'src/app/models/campaign';
import { CAMPAIGNS } from 'src/app/models/mock/mockCampaigns';
import { AlertService } from 'src/app/services/alert.service';
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
    private campaignService: CampaignService,
    private _alertService: AlertService
  ) {
    this.campaigns = this.campaignService.getCampaigns();
  }

  onSubmitEvent(campaign: Campaign): void {
    this.createCampaignModalOpen = false;

    this._alertService.success('Campaign created')
  }

  onClearAllDataClick(): void {
    localStorage.clear();

    window.location.reload();
  }
}
