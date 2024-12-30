import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsChangeOrderDialogComponent } from './add-items-change-order-dialog.component';

describe('AddItemsChangeOrderDialogComponent', () => {
  let component: AddItemsChangeOrderDialogComponent;
  let fixture: ComponentFixture<AddItemsChangeOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemsChangeOrderDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemsChangeOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
