import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinfoContractComponent } from './basicinfo-contract.component';

describe('BasicinfoContractComponent', () => {
  let component: BasicinfoContractComponent;
  let fixture: ComponentFixture<BasicinfoContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicinfoContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicinfoContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
