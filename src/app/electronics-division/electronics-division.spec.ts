import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsDivision } from './electronics-division';

describe('ElectronicsDivision', () => {
  let component: ElectronicsDivision;
  let fixture: ComponentFixture<ElectronicsDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicsDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
