import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbannerComponent } from './foodbanner.component';

describe('FoodbannerComponent', () => {
  let component: FoodbannerComponent;
  let fixture: ComponentFixture<FoodbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
