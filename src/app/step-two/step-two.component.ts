import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service'
import { Stepper, Steptwo } from '../model'


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent {

  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.step = this._formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
    });
    this.formService.stepReady(this.step, 'two')
  }

  // change(title){
  //   this.step.patchValue({ extraName: title})
  // }

  Next() {
    this.formService.StepTwo = new Steptwo(this.step.value.make, this.step.value.model, this.step.value.year);
    this.formService.Stepper = (new Stepper(this.formService.StepOne, this.formService.StepTwo, this.formService.StepThree))
    console.log(this.formService.Stepper);
  }

}