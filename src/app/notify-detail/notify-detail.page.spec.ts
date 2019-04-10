import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyDetailPage } from './notify-detail.page';

describe('NotifyDetailPage', () => {
  let component: NotifyDetailPage;
  let fixture: ComponentFixture<NotifyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
