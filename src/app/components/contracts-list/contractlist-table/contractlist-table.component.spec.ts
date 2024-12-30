import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractlistTableComponent } from './contractlist-table.component';

describe('ContractlistTableComponent', () => {
  let component: ContractlistTableComponent;
  let fixture: ComponentFixture<ContractlistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractlistTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
