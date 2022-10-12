import { Directive, Input } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appFormInput]',
  providers: [{provide: NG_VALIDATORS, useExisting: FormInputDirective, multi: true}]
})
export class FormInputDirective implements Validator {
  @Input() appCtrlData: string = "";

  validate(control: AbstractControl): ValidationErrors | null {
    let regexp = new RegExp(this.appCtrlData);
    if (!regexp.test(control.value)) {
      return {invalid: true};
    }
    return null;
  }

}
