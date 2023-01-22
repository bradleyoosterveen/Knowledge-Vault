import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsViewComponent } from './campaigns-view.component';

describe('CampaignsViewComponent', () => {
  let component: CampaignsViewComponent;
  let fixture: ComponentFixture<CampaignsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
