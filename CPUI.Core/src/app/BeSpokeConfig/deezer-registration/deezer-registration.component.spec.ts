import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerRegistrationComponent } from './deezer-registration.component';

describe('DeezerRegistrationComponent', () => {
  let component: DeezerRegistrationComponent;
  let fixture: ComponentFixture<DeezerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeezerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
