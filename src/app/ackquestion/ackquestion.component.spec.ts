import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckquestionComponent } from './ackquestion.component';

describe('AckquestionComponent', () => {
  let component: AckquestionComponent;
  let fixture: ComponentFixture<AckquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
