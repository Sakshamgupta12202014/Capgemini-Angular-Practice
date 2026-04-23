import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReference } from './template-reference';

describe('TemplateReference', () => {
  let component: TemplateReference;
  let fixture: ComponentFixture<TemplateReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReference],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateReference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
