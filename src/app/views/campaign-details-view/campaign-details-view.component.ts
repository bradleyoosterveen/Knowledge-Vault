import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/models/campaign';
import { AlertService } from 'src/app/services/alert.service';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-details-view',
  templateUrl: './campaign-details-view.component.html',
  styleUrls: ['./campaign-details-view.component.scss']
})
export class CampaignDetailsViewComponent {
  confirmCampaignDeletionModalOpen: boolean = false;

  campaignId: number;
  campaign: Campaign;

  form: FormGroup;
  initialFormValues: any;

  constructor(
    private router: Router,
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private _alertService: AlertService
  ) {
    if (this.route.parent === null) {
      this.campaignId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.campaignId = Number(this.route.parent.snapshot.paramMap.get('id'));
    }

    this.campaign = this.campaignService.getCampaign(this.campaignId);

    this.form = new FormGroup({
      name: new FormControl(this.campaign.name, [
        Validators.required
      ]),
      description: new FormControl(this.campaign.description),
      bannerURL: new FormControl(this.campaign.bannerURL, [
        Validators.required
      ]),
      notes: new FormControl(this.campaign.notes)
    });

    this.initialFormValues = this.form.value;
  }
  
  onCampaignDeleteClick(): void {
    this.campaignService.deleteCampaign(this.campaign);

    this.router.navigate(['/']);

    this._alertService.success('Campaign deleted');
  }

  onResetToDefaultClick(): void {
    this.form.reset(this.initialFormValues);
  }

  onSaveChangesClick(): void {
    if (!this.form.valid)
      return;

    let campaign: Campaign = {
      id: this.campaign.id,
      name: this.form.get('name')?.value || '',
      description: this.form.get('description')?.value || '',
      bannerURL: this.form.get('bannerURL')?.value || '',
      notes: this.form.get('notes')?.value || ''
    }

    this.campaignService.updateCampaign(campaign);

    this.form.markAsPristine();
    this.initialFormValues = this.form.value;

    this._alertService.success('Campaign updated');
  }
}
