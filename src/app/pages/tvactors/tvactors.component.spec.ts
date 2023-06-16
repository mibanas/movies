import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvactorsComponent } from './tvactors.component';

describe('TvactorsComponent', () => {
  let component: TvactorsComponent;
  let fixture: ComponentFixture<TvactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
