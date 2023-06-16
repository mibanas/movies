import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvimagesComponent } from './tvimages.component';

describe('TvimagesComponent', () => {
  let component: TvimagesComponent;
  let fixture: ComponentFixture<TvimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
