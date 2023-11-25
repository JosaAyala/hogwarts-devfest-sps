import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GryffindorComponent } from './gryffindor.component';

describe('GryffindorComponent', () => {
  let component: GryffindorComponent;
  let fixture: ComponentFixture<GryffindorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GryffindorComponent]
    });
    fixture = TestBed.createComponent(GryffindorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
