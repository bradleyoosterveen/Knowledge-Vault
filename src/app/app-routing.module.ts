import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasViewComponent } from './views/areas-view/areas-view.component';
import { CampaignDetailsViewComponent } from './views/campaign-details-view/campaign-details-view.component';
import { CampaignViewComponent } from './views/campaign-view/campaign-view.component';
import { CampaignsViewComponent } from './views/campaigns-view/campaigns-view.component';
import { CharactersViewComponent } from './views/characters-view/characters-view.component';
import { ItemsViewComponent } from './views/items-view/items-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { RegionsViewComponent } from './views/regions-view/regions-view.component';
import { SitesViewComponent } from './views/sites-view/sites-view.component';
import { SpellsViewComponent } from './views/spells-view/spells-view.component';

const routes: Routes = [
  {path: '', title: 'Your campaigns', component: CampaignsViewComponent, pathMatch: 'full'},
  {path: 'campaign/:id', component: CampaignViewComponent, children: [
    {path: '', redirectTo: 'general-information', pathMatch: 'full'},
    {path: 'general-information', component: CampaignDetailsViewComponent},
    {path: 'characters', component: CharactersViewComponent},
    {path: 'sites', component: SitesViewComponent},
    {path: 'regions', component: RegionsViewComponent},
    {path: 'areas', component: AreasViewComponent},
    {path: 'items', component: ItemsViewComponent},
    {path: 'spells', component: SpellsViewComponent},

    {path: '**', title: 'Page not found', component: NotFoundViewComponent}
  ]},

  {path: '**', title: 'Page not found', component: NotFoundViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
