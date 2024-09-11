import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemodewahrheitComponent } from './gamemodewahrheit.component';

describe('GamemodewahrheitComponent', () => {
  let component: GamemodewahrheitComponent;
  let fixture: ComponentFixture<GamemodewahrheitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamemodewahrheitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamemodewahrheitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
