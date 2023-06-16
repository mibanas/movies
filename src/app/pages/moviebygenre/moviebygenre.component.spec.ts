import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebygenreComponent } from './moviebygenre.component';

describe('MoviebygenreComponent', () => {
  let component: MoviebygenreComponent;
  let fixture: ComponentFixture<MoviebygenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviebygenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviebygenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
