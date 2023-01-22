import { Component } from '@angular/core';

import { CAMPAIGNS } from './models/mock/mockCampaigns';
import { Campaign } from './models/campaign';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Knowledge-Vault';

  campaigns: Campaign[] = CAMPAIGNS;
}
