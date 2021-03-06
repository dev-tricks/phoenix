import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActiveComponent } from './login-active.component';

describe('LoginActiveComponent', () => {
  let component: LoginActiveComponent;
  let fixture: ComponentFixture<LoginActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
