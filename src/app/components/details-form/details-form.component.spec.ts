import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DetailsFormComponent } from './details-form.component';

describe('DetailsFormComponent', () => {
  let component: DetailsFormComponent;
  let fixture: ComponentFixture<DetailsFormComponent>;

  const $ = (query: string): HTMLElement => {
    return fixture.nativeElement.querySelector(query);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsFormComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`edit mode (where username can't be changed)`, () => {
    it(`should disalbe the username field when it's in edit current user mode`, () => {
      component.editMode = true;
      fixture.detectChanges();
      expect($('#uid').getAttribute('disabled')).toBe('true');
    });
    it(`should enable the username field when it's in create new user`, () => {
      component.editMode = false;
      fixture.detectChanges();
      console.log($('#uid'));
      expect($('#uid').getAttribute('disabled')).toBe('false');
    });
  });

  describe('change password mode', () => {
    it('should not show a password input field if user is a ad user', () => {
      component.passwordUpdateMode = false;

      fixture.detectChanges();
      console.log($('#password'));
      expect($('#password')).toBeFalsy();
    });
  });

  describe('countries', () => {
    it('should should bring back a list of countries', () => {
      expect(component.countries).toEqual(
        jasmine.arrayContaining(['Australia', 'New Zealand']));
    });
  });
});
