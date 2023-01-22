import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsViewComponent } from './campaign-details-view.component';

describe('CampaignDetailsViewComponent', () => {
  let component: CampaignDetailsViewComponent;
  let fixture: ComponentFixture<CampaignDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
