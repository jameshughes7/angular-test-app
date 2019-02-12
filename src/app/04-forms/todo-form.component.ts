
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class TodoFormComponent {
  form: FormGroup;

  // Form builder object being used to create a form group
  // with 2 form controls
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
};
