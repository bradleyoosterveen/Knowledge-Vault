import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/models/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent {
  confirmCampaignDeletionModalOpen: boolean = false;
  public campaign: Campaign;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private campaignService: CampaignService
  ) {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.campaign = this.campaignService.getCampaign(id);
  }

  onCampaignDeleteClick(): void {
    this.campaignService.deleteCampaign(this.campaign);

    this.router.navigate(['/']);
  }
}
