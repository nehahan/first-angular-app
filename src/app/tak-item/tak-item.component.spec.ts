import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakItemComponent } from './tak-item.component';

describe('TakItemComponent', () => {
  let component: TakItemComponent;
  let fixture: ComponentFixture<TakItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
