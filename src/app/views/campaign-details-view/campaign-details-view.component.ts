import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/models/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-details-view',
  templateUrl: './campaign-details-view.component.html',
  styleUrls: ['./campaign-details-view.component.scss']
})
export class CampaignDetailsViewComponent {
  campaignId: number;
  campaign: Campaign;

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute
  ) {
    if (this.route.parent === null) {
      this.campaignId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.campaignId = Number(this.route.parent.snapshot.paramMap.get('id'));
    }

    this.campaign = this.campaignService.getCampaign(this.campaignId);
  }
}
