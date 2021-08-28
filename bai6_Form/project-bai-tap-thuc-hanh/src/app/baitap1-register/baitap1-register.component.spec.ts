import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1RegisterComponent } from './baitap1-register.component';

describe('Baitap1RegisterComponent', () => {
  let component: Baitap1RegisterComponent;
  let fixture: ComponentFixture<Baitap1RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap1RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
