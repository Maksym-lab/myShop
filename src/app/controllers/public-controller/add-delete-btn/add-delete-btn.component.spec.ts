import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDeleteBtnComponent } from './add-delete-btn.component';
describe('AddDeleteBtnComponent', () => {
  let component: AddDeleteBtnComponent;
  let fixture: ComponentFixture<AddDeleteBtnComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeleteBtnComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
