import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoGaleriaComponent } from './dialogo-galeria.component';

describe('DialogoGaleriaComponent', () => {
  let component: DialogoGaleriaComponent;
  let fixture: ComponentFixture<DialogoGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
