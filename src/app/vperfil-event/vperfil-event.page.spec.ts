import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VperfilEventPage } from './vperfil-event.page';

describe('VperfilEventPage', () => {
  let component: VperfilEventPage;
  let fixture: ComponentFixture<VperfilEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VperfilEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VperfilEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
