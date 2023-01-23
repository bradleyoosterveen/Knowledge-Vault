import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersViewComponent } from './characters-view.component';

describe('CharactersViewComponent', () => {
  let component: CharactersViewComponent;
  let fixture: ComponentFixture<CharactersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
