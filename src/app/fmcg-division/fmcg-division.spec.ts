import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmcgDivision } from './fmcg-division';

describe('FmcgDivision', () => {
  let component: FmcgDivision;
  let fixture: ComponentFixture<FmcgDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmcgDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmcgDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
