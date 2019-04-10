import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEventsPage } from './perfil-events.page';

describe('PerfilEventsPage', () => {
  let component: PerfilEventsPage;
  let fixture: ComponentFixture<PerfilEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
