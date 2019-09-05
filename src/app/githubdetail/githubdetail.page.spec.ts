import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubdetailPage } from './githubdetail.page';

describe('GithubdetailPage', () => {
  let component: GithubdetailPage;
  let fixture: ComponentFixture<GithubdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
