import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrderDialogComponent } from './change-order-dialog.component';

describe('ChangeOrderDialogComponent', () => {
  let component: ChangeOrderDialogComponent;
  let fixture: ComponentFixture<ChangeOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeOrderDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
