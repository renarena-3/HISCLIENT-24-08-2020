import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchaccountsComponent } from './searchaccounts.component';

describe('SearchaccountsComponent', () => {
  let component: SearchaccountsComponent;
  let fixture: ComponentFixture<SearchaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
