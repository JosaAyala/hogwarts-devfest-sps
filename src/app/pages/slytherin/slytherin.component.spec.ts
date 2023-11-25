import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlytherinComponent } from './slytherin.component';

describe('SlytherinComponent', () => {
  let component: SlytherinComponent;
  let fixture: ComponentFixture<SlytherinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlytherinComponent]
    });
    fixture = TestBed.createComponent(SlytherinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
