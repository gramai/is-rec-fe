import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaElementComponent } from './criteria-element.component';

describe('CriteriaElementComponent', () => {
  let component: CriteriaElementComponent;
  let fixture: ComponentFixture<CriteriaElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
