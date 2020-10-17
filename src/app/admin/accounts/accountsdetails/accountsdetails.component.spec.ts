import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsdetailsComponent } from './accountsdetails.component';

describe('AccountsdetailsComponent', () => {
  let component: AccountsdetailsComponent;
  let fixture: ComponentFixture<AccountsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
