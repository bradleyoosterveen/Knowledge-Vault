import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaignFormComponent } from './create-campaign-form.component';

describe('CreateCampaignFormComponent', () => {
  let component: CreateCampaignFormComponent;
  let fixture: ComponentFixture<CreateCampaignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCampaignFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCampaignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
