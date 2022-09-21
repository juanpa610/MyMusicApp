import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFavoritosComponent } from './main-favoritos.component';

describe('MainFavoritosComponent', () => {
  let component: MainFavoritosComponent;
  let fixture: ComponentFixture<MainFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
