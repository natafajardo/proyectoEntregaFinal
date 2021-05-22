import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudarComponent } from './ayudar.component';

describe('AyudarComponent', () => {
  let component: AyudarComponent;
  let fixture: ComponentFixture<AyudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
