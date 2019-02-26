import { Component } from '@angular/core';
import { FormService } from './form.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormService]
})
export class AppComponent {
  isLinear = false;
  myForm: Array<string>
  editable: boolean = false;

  constructor(
    public formService: FormService,
    private fb: FormBuilder
  ) {
    this.myForm = this.formService.mainForm.value
  }

  keys(): Array<string> {
    return Object.keys(this.myForm);
  }
}
