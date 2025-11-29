import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumesDivision } from './costumes-division';

describe('CostumesDivision', () => {
  let component: CostumesDivision;
  let fixture: ComponentFixture<CostumesDivision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumesDivision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumesDivision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
