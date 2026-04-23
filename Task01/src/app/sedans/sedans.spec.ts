import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedans } from './sedans';

describe('Sedans', () => {
  let component: Sedans;
  let fixture: ComponentFixture<Sedans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sedans],
    }).compileComponents();

    fixture = TestBed.createComponent(Sedans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
