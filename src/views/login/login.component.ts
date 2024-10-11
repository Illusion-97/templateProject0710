import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(protected service: AuthService, private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity())  
      this.service.login({
        email: this.email,
        password: this.password
      }).subscribe(() => this.router.navigate(['/']))
  }

}
