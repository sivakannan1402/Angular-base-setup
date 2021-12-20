import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedSharedComponentBComponent } from './scoped-shared-component-b.component';

describe('ScopedSharedComponentBComponent', () => {
  let component: ScopedSharedComponentBComponent;
  let fixture: ComponentFixture<ScopedSharedComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopedSharedComponentBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopedSharedComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
