import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsDivision } from './logistics-division';

describe('LogisticsDivision', () => {
  let component: LogisticsDivision;
  let fixture: ComponentFixture<LogisticsDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
