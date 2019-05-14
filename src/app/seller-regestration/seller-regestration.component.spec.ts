import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegestrationComponent } from './seller-regestration.component';

describe('SellerRegestrationComponent', () => {
  let component: SellerRegestrationComponent;
  let fixture: ComponentFixture<SellerRegestrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerRegestrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRegestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
