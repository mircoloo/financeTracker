import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegiroComponent } from './degiro.component';

describe('DegiroComponent', () => {
  let component: DegiroComponent;
  let fixture: ComponentFixture<DegiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
