import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFavComponent } from './icon-fav.component';

describe('IconFavComponent', () => {
  let component: IconFavComponent;
  let fixture: ComponentFixture<IconFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
