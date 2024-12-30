import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrderTableComponent } from './change-order-table.component';

describe('ChangeOrderTableComponent', () => {
  let component: ChangeOrderTableComponent;
  let fixture: ComponentFixture<ChangeOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeOrderTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
