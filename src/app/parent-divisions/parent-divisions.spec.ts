import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDivisions } from './parent-divisions';

describe('ParentDivisions', () => {
  let component: ParentDivisions;
  let fixture: ComponentFixture<ParentDivisions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDivisions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDivisions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
