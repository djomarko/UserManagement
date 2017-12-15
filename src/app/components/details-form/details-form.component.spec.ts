import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormComponent } from './details-form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('DetailsFormComponent', () => {
  let component: DetailsFormComponent;
  let fixture: ComponentFixture<DetailsFormComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`edit mode (where username can't be changed)`, () => {
    it(`should disalbe the username field when it's in edit current user mode`, () => {
      component.editMode = true;
        expect(el.querySelector(`[name='uid']`).disabled).toBeTruthy();
    });
    it(`should enable the username field when it's in create new user`, () => {
      component.editMode = false;
      expect($(`[name='uid']`).disabled).toBeFalsy();
    });
  });

  describe('change password mode', () => {
    it('should not show a password input field if user is a ad user', () => {
      component.passwordUpdateMode = true;
      // fixture.detectChanges();
      expect(el.querySelector(`[name='password']`)).toBeFalsy();
    });
  });

  const $ = (query: string) => {
    return fixture.debugElement.query(By.css(query)).nativeElement;
  };
});
