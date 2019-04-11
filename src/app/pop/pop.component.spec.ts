import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopComponent } from './pop.component';

describe('PopComponent', () => {
  let component: PopComponent;
  let fixture: ComponentFixture<PopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
