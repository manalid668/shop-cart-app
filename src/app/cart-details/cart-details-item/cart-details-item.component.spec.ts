import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsItemComponent } from './cart-details-item.component';

describe('CartDetailsItemComponent', () => {
  let component: CartDetailsItemComponent;
  let fixture: ComponentFixture<CartDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
