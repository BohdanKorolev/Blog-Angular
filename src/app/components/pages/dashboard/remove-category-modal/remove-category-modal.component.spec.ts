import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCategoryModalComponent } from './remove-category-modal.component';

describe('RemoveCategoryModalComponent', () => {
  let component: RemoveCategoryModalComponent;
  let fixture: ComponentFixture<RemoveCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
