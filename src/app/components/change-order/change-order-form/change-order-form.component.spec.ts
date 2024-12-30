import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrderFormComponent } from './change-order-form.component';

describe('ChangeOrderFormComponent', () => {
  let component: ChangeOrderFormComponent;
  let fixture: ComponentFixture<ChangeOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeOrderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
