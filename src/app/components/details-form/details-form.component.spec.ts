import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormComponent } from './details-form.component';
import { FormsModule } from '@angular/forms';

fdescribe('DetailsFormComponent', () => {
  let component: DetailsFormComponent;
  let fixture: ComponentFixture<DetailsFormComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`edit mode (where username can't be changed)`, () => {
    it(`should disalbe the username field when it's set to true`, () => {
      component.editMode = true;
      fixture.detectChanges();
      console.log($(`[name='uid']`));
      expect($(`[name='uid']`).isEnabled()).toBeFalsy();
    });
  });

  const $ = (query: string) => {
    return fixture.nativeElement.querySelector(query);
  };
});
