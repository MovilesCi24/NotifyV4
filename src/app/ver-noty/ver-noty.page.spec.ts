import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNotyPage } from './ver-noty.page';

describe('VerNotyPage', () => {
  let component: VerNotyPage;
  let fixture: ComponentFixture<VerNotyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNotyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerNotyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
