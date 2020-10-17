import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateaccComponent } from './activateacc.component';

describe('ActivateaccComponent', () => {
  let component: ActivateaccComponent;
  let fixture: ComponentFixture<ActivateaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
