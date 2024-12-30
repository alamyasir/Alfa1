import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocContractComponent } from './doc-contract.component';

describe('DocContractComponent', () => {
  let component: DocContractComponent;
  let fixture: ComponentFixture<DocContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
