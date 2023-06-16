import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetvComponent } from './onetv.component';

describe('OnetvComponent', () => {
  let component: OnetvComponent;
  let fixture: ComponentFixture<OnetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
