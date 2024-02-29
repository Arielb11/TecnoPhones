import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMacbooksComponent } from './vista-macbooks.component';

describe('MacbooksComponent', () => {
  let component: VistaMacbooksComponent;
  let fixture: ComponentFixture<VistaMacbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaMacbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaMacbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
