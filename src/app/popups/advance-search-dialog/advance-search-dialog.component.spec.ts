import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchDialogComponent } from './advance-search-dialog.component';

describe('AdvanceSearchDialogComponent', () => {
  let component: AdvanceSearchDialogComponent;
  let fixture: ComponentFixture<AdvanceSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
