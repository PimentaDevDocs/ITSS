import { Injectable } from '@angular/core';
import {FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {
  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (
        control instanceof UntypedFormGroup ||
        control instanceof UntypedFormArray
      ) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }

  getFieldErrorMessage(formGroup: FormGroup, fieldName: string): string {
    const field = formGroup.get(fieldName) as FormControl;
    return this.getErrorMessageFromField(field);
  }

  getErrorMessageFromField(field: UntypedFormControl): string {
    if (field?.hasError('required')) {
      return 'Campo obrigatótio.';
    }

    return field['errors'] ? 'Error' : '';
  }

}
