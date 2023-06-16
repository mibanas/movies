import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsimilarComponent } from './tvsimilar.component';

describe('TvsimilarComponent', () => {
  let component: TvsimilarComponent;
  let fixture: ComponentFixture<TvsimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsimilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvsimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
