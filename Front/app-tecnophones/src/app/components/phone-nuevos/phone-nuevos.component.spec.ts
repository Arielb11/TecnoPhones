import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNuevosComponent } from './phone-nuevos.component';

describe('PhoneNuevosComponent', () => {
  let component: PhoneNuevosComponent;
  let fixture: ComponentFixture<PhoneNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneNuevosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
