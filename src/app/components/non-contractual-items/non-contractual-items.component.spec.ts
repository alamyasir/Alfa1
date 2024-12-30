import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonContractualItemsComponent } from './non-contractual-items.component';

describe('NonContractualItemsComponent', () => {
  let component: NonContractualItemsComponent;
  let fixture: ComponentFixture<NonContractualItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonContractualItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonContractualItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
