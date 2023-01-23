import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsViewComponent } from './spells-view.component';

describe('SpellsViewComponent', () => {
  let component: SpellsViewComponent;
  let fixture: ComponentFixture<SpellsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
