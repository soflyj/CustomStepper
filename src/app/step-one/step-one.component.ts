import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service'
import { Stepper, Stepone } from '../model'


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent {

  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.formService.stepReady(this.step, 'one')
  }

  // change(title){
  //   this.step.patchValue({ extraName: title})
  // }

  Next() {
    this.formService.StepOne = new Stepone(this.step.value.firstName, this.step.value.lastName);
    this.formService.Stepper = (new Stepper(this.formService.StepOne, this.formService.StepTwo, this.formService.StepThree))
    console.log(this.formService.Stepper);
  }

}