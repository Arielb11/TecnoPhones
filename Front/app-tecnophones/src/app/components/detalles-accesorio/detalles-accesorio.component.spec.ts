import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAccesorioComponent } from './detalles-accesorio.component';

describe('DetallesAccesorioComponent', () => {
  let component: DetallesAccesorioComponent;
  let fixture: ComponentFixture<DetallesAccesorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAccesorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
