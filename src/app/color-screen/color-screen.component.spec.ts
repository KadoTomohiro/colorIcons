import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorScreenComponent } from './color-screen.component';

describe('ColorScreenComponent', () => {
  let component: ColorScreenComponent;
  let fixture: ComponentFixture<ColorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
