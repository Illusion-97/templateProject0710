import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AbstractFormGroupComponent } from '../../tools/abstract-form-group-component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent extends AbstractFormGroupComponent {

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    src: new FormControl(""),
    titre: new FormControl("", {validators: Validators.required}),
    lien: new FormControl("", {validators: Validators.required}),
    alt: new FormControl("", {validators: Validators.required}),
    description: new FormControl("", {validators: Validators.required})
  })

  onSubmit$(): void {
    console.log("Article", this.form.value)
  }
}
