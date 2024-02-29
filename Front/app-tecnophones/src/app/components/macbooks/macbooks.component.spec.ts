import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbooksComponent } from './macbooks.component';

describe('MacbooksComponent', () => {
  let component: MacbooksComponent;
  let fixture: ComponentFixture<MacbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
