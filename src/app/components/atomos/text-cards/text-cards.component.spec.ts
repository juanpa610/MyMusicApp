import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardsComponent } from './text-cards.component';

describe('TextCardsComponent', () => {
  let component: TextCardsComponent;
  let fixture: ComponentFixture<TextCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
