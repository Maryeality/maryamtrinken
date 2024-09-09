import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemodeselectionComponent } from './gamemodeselection.component';

describe('GamemodeselectionComponent', () => {
  let component: GamemodeselectionComponent;
  let fixture: ComponentFixture<GamemodeselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamemodeselectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamemodeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
