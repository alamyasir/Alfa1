import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemsContractComponent } from './additems-contract.component';

describe('AdditemsContractComponent', () => {
  let component: AdditemsContractComponent;
  let fixture: ComponentFixture<AdditemsContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditemsContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditemsContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
