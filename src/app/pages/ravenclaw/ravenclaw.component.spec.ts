import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenclawComponent } from './ravenclaw.component';

describe('RavenclawComponent', () => {
  let component: RavenclawComponent;
  let fixture: ComponentFixture<RavenclawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RavenclawComponent]
    });
    fixture = TestBed.createComponent(RavenclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
