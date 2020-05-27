import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingHeaderComponent } from './shopping-header.component';

describe('ShoppingHeaderComponent', () => {
  let component: ShoppingHeaderComponent;
  let fixture: ComponentFixture<ShoppingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
