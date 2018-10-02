import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShoppingListEditComponent } from './app-shopping-list-edit.component';

describe('AppShoppingListEditComponent', () => {
  let component: AppShoppingListEditComponent;
  let fixture: ComponentFixture<AppShoppingListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShoppingListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShoppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
