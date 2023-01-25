import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Campaign } from 'src/app/models/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-create-campaign-form',
  templateUrl: './create-campaign-form.component.html',
  styleUrls: ['./create-campaign-form.component.scss']
})
export class CreateCampaignFormComponent {
  @Output() submitEvent = new EventEmitter<Campaign>();

  form!: FormGroup;
  initialFormValues: any;

  constructor(
    private campaignService: CampaignService
  ) {
    this.form = new FormGroup({
      name: new FormControl('My Campaign', [
        Validators.required
      ]),
      description: new FormControl(null),
      bannerURL: new FormControl(null, [
        Validators.required
      ])
    });

    this.initialFormValues = this.form.value;
  }

  onSubmit(): void {
    if (!this.form.valid)
      return;

    let campaign: Campaign = {
      id: this.campaignService.getNextID(),
      name: this.form.get('name')?.value || '',
      description: this.form.get('description')?.value || '',
      bannerURL: this.form.get('bannerURL')?.value || ''
    }

    this.campaignService.addCampaign(campaign);

    this.submitEvent.emit(campaign);

    this.form.reset(this.initialFormValues);
  }

  onResetToDefaultsClick(): void {
    this.form.reset(this.initialFormValues);
  }
}
