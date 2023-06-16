import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidoesComponent } from './vidoes.component';

describe('VidoesComponent', () => {
  let component: VidoesComponent;
  let fixture: ComponentFixture<VidoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
