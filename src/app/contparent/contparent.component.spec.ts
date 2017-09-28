import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContparentComponent } from './contparent.component';

describe('ContparentComponent', () => {
  let component: ContparentComponent;
  let fixture: ComponentFixture<ContparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
