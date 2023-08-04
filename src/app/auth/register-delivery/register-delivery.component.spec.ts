import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryComponent } from './register-delivery.component';

describe('RegisterDeliveryComponent', () => {
  let component: RegisterDeliveryComponent;
  let fixture: ComponentFixture<RegisterDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDeliveryComponent]
    });
    fixture = TestBed.createComponent(RegisterDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
