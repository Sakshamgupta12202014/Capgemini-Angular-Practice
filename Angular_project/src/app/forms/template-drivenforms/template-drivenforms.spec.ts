import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenforms } from './template-drivenforms';

describe('TemplateDrivenforms', () => {
  let component: TemplateDrivenforms;
  let fixture: ComponentFixture<TemplateDrivenforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenforms],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
