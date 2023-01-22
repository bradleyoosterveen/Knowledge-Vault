import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignDetailsViewComponent } from './views/campaign-details-view/campaign-details-view.component';
import { CampaignViewComponent } from './views/campaign-view/campaign-view.component';
import { CampaignsViewComponent } from './views/campaigns-view/campaigns-view.component';
import { ItemsViewComponent } from './views/items-view/items-view.component';

const routes: Routes = [
  {path: '', title: 'Your campaigns', component: CampaignsViewComponent, pathMatch: 'full'},
  {path: 'campaign/:id', component: CampaignViewComponent, children: [
    {path: '', component: CampaignDetailsViewComponent, outlet: 'campaignObjects'},
    {path: 'items', component: ItemsViewComponent, pathMatch: 'full', outlet: 'campaignObjects'}
  ]},
  {path: '**', title: 'Page not found', component: CampaignsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
