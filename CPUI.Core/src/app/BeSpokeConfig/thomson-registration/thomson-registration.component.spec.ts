import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomsonRegistrationComponent } from './thomson-registration.component';

describe('ThomsonRegistrationComponent', () => {
  let component: ThomsonRegistrationComponent;
  let fixture: ComponentFixture<ThomsonRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThomsonRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThomsonRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
