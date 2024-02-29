import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMacbookComponent } from './agregar-macbook.component';

describe('AgregarMacbookComponent', () => {
  let component: AgregarMacbookComponent;
  let fixture: ComponentFixture<AgregarMacbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMacbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarMacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
