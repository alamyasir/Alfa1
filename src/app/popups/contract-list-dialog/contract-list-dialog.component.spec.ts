import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractListDialogComponent } from './contract-list-dialog.component';

describe('ContractListDialogComponent', () => {
  let component: ContractListDialogComponent;
  let fixture: ComponentFixture<ContractListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractListDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
