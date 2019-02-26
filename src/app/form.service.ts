import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Stepper, Stepone, Steptwo, Stepthree } from './model';

@Injectable()
export class FormService {

  public Stepper: Stepper = null;
  public StepOne: Stepone = null;
  public StepTwo: Steptwo = null;
  public StepThree: Stepthree = null;

  private stepOneSource: Subject<FormGroup> = new Subject();
  stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();

  private stepTwoSource: Subject<FormGroup> = new Subject();
  stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();



  mainForm: FormGroup = this._formBuilder.group({
    firstName: '',
    lastName: '',
    make: '',
    model: ''
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepOne.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.firstName = val.firstName
        this.mainForm.value.lastName = val.lastName
        // this.mainForm.value.extraName = val.extraName
      })
    )
    this.stepTwo.subscribe(form =>
      form.valueChanges.subscribe(val => {
        // console.log(val)
        this.mainForm.value.make = val.make
        this.mainForm.value.model = val.model
        this.mainForm.value.year = val.year
      })
    )
  }

  stepReady(form: FormGroup, part) {
    switch (part) {
      case 'one': { this.stepOneSource.next(form) }
      case 'two': { this.stepTwoSource.next(form) }
    }
  }
}