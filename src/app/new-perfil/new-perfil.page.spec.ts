import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPerfilPage } from './new-perfil.page';

describe('NewPerfilPage', () => {
  let component: NewPerfilPage;
  let fixture: ComponentFixture<NewPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
