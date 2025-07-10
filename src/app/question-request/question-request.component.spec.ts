import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRequestComponent } from './question-request.component';

describe('QuestionRequestComponent', () => {
  let component: QuestionRequestComponent;
  let fixture: ComponentFixture<QuestionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
