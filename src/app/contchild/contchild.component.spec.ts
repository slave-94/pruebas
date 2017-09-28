import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContchildComponent } from './contchild.component';

describe('ContchildComponent', () => {
  let component: ContchildComponent;
  let fixture: ComponentFixture<ContchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
