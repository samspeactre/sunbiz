import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesAndPaymentsComponent } from './charges-and-payments.component';

describe('ChargesAndPaymentsComponent', () => {
  let component: ChargesAndPaymentsComponent;
  let fixture: ComponentFixture<ChargesAndPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChargesAndPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargesAndPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
