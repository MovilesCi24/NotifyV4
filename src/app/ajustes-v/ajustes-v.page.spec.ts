import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesVPage } from './ajustes-v.page';

describe('AjustesVPage', () => {
  let component: AjustesVPage;
  let fixture: ComponentFixture<AjustesVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesVPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
