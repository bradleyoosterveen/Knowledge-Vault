import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsViewComponent } from './regions-view.component';

describe('RegionsViewComponent', () => {
  let component: RegionsViewComponent;
  let fixture: ComponentFixture<RegionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
