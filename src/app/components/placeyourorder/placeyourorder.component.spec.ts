import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceyourorderComponent } from './placeyourorder.component';

describe('PlaceyourorderComponent', () => {
  let component: PlaceyourorderComponent;
  let fixture: ComponentFixture<PlaceyourorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceyourorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceyourorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
