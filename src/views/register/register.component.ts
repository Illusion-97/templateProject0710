import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractFormGroupComponent } from '../../tools/abstract-form-group-component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends AbstractFormGroupComponent {
  password: FormControl = new FormControl("", {validators: [Validators.minLength(6), Validators.required]})
  confirmPassword: FormControl = new FormControl("", {validators: [Validators.required, this.mustMatch(this.password)]})

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    username: new FormControl("", {validators: Validators.required}),
    email: new FormControl("", {validators: [Validators.email, Validators.required]}),
    password: this.password,
  })

  onSubmit$(): void {
    console.log("USER", this.form.value)
  }
}
