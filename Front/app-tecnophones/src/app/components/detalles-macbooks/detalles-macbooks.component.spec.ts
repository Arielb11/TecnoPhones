import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMacbooksComponent } from './detalles-macbooks.component';

describe('DetallesMacbooksComponent', () => {
  let component: DetallesMacbooksComponent;
  let fixture: ComponentFixture<DetallesMacbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesMacbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesMacbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
