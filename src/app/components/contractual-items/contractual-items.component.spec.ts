import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractualItemsComponent } from './contractual-items.component';

describe('ContractualItemsComponent', () => {
  let component: ContractualItemsComponent;
  let fixture: ComponentFixture<ContractualItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractualItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractualItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
