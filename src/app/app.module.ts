import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignsViewComponent } from './views/campaigns-view/campaigns-view.component';
import { CampaignViewComponent } from './views/campaign-view/campaign-view.component';
import { CampaignDetailsViewComponent } from './views/campaign-details-view/campaign-details-view.component';
import { ItemsViewComponent } from './views/items-view/items-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { CharactersViewComponent } from './views/characters-view/characters-view.component';
import { SitesViewComponent } from './views/sites-view/sites-view.component';
import { RegionsViewComponent } from './views/regions-view/regions-view.component';
import { AreasViewComponent } from './views/areas-view/areas-view.component';
import { SpellsViewComponent } from './views/spells-view/spells-view.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { CreateCampaignFormComponent } from './components/forms/create-campaign-form/create-campaign-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCharacterFormComponent } from './components/forms/create-character-form/create-character-form.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { CharacterViewComponent } from './views/character-view/character-view.component';
import { AlertsComponent } from './components/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsViewComponent,
    CampaignViewComponent,
    CampaignDetailsViewComponent,
    ItemsViewComponent,
    NotFoundViewComponent,
    CharactersViewComponent,
    SitesViewComponent,
    RegionsViewComponent,
    AreasViewComponent,
    SpellsViewComponent,
    ModalComponent,
    CreateCampaignFormComponent,
    CreateCharacterFormComponent,
    WorkInProgressComponent,
    CharacterViewComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
