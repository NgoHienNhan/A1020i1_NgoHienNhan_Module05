import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thuchanh1TodoComponent } from './thuchanh1-todo.component';

describe('Thuchanh1TodoComponent', () => {
  let component: Thuchanh1TodoComponent;
  let fixture: ComponentFixture<Thuchanh1TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thuchanh1TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thuchanh1TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
