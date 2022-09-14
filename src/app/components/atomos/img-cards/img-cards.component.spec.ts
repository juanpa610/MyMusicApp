import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCardsComponent } from './img-cards.component';

describe('ImgCardsComponent', () => {
  let component: ImgCardsComponent;
  let fixture: ComponentFixture<ImgCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
