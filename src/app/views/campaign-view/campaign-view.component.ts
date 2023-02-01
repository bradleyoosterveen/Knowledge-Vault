import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Campaign } from 'src/app/models/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent {
  public campaign: Campaign;

  updatedSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService
  ) {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.campaign = this.campaignService.getCampaign(id);

    this.updatedSubscription = this.campaignService.updated.subscribe(campaign => {
      this.campaign = campaign;
    })
  }

  ngOnDestroy(): void {
    this.updatedSubscription.unsubscribe();
  }
}
