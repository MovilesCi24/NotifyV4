import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerfilPage } from './user-perfil.page';

describe('UserPerfilPage', () => {
  let component: UserPerfilPage;
  let fixture: ComponentFixture<UserPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
