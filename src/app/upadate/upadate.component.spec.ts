import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateComponent } from './upadate.component';

describe('UpadateComponent', () => {
  let component: UpadateComponent;
  let fixture: ComponentFixture<UpadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
