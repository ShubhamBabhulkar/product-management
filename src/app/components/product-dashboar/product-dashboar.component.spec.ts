import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboarComponent } from './news-dashboar.component';

describe('ProductDashboarComponent', () => {
  let component: ProductDashboarComponent;
  let fixture: ComponentFixture<ProductDashboarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDashboarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
