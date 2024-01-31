import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneUsadosComponent } from './phone-usados.component';

describe('PhoneUsadosComponent', () => {
  let component: PhoneUsadosComponent;
  let fixture: ComponentFixture<PhoneUsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneUsadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
