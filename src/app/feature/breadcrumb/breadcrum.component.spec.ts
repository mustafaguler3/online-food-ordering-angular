import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumComponent } from './breadcrum.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumComponent;
  let fixture: ComponentFixture<BreadcrumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumComponent]
    });
    fixture = TestBed.createComponent(BreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
