import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGame } from './play-game';

describe('PlayGame', () => {
  let component: PlayGame;
  let fixture: ComponentFixture<PlayGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
