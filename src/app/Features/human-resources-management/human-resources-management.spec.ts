import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesManagement } from './human-resources-management';

describe('HumanResourcesManagement', () => {
  let component: HumanResourcesManagement;
  let fixture: ComponentFixture<HumanResourcesManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanResourcesManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourcesManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
