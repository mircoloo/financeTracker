import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondoraComponent } from './bondora.component';

describe('BondoraComponent', () => {
  let component: BondoraComponent;
  let fixture: ComponentFixture<BondoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
