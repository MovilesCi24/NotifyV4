import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociateEventsPage } from './asociate-events.page';

describe('AsociateEventsPage', () => {
  let component: AsociateEventsPage;
  let fixture: ComponentFixture<AsociateEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociateEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociateEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
