import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ""
  password: string = ""

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity())
      console.log("CREDENTIALS", {
        email: this.email,
        password: this.password
      })
  }

}
