import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProcessComponent } from './order-process.component';

describe('OrderProcessComponent', () => {
  let component: OrderProcessComponent;
  let fixture: ComponentFixture<OrderProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderProcessComponent]
    });
    fixture = TestBed.createComponent(OrderProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
