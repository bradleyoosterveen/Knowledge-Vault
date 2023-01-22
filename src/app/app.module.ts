import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignsViewComponent } from './views/campaigns-view/campaigns-view.component';
import { CampaignViewComponent } from './views/campaign-view/campaign-view.component';
import { CampaignDetailsViewComponent } from './views/campaign-details-view/campaign-details-view.component';
import { ItemsViewComponent } from './views/items-view/items-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsViewComponent,
    CampaignViewComponent,
    CampaignDetailsViewComponent,
    ItemsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
