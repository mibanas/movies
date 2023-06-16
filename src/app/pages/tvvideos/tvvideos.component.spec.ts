import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvvideosComponent } from './tvvideos.component';

describe('TvvideosComponent', () => {
  let component: TvvideosComponent;
  let fixture: ComponentFixture<TvvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
