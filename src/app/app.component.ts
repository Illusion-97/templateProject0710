import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { HomeComponent } from "../views/home/home.component";
import { LoginComponent } from "../views/login/login.component";
import { FormControlComponent } from "../components/form-control/form-control.component";
import { RegisterComponent } from "../views/register/register.component";
import { EditorComponent } from "../views/editor/editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, HomeComponent, LoginComponent, FormControlComponent, RegisterComponent, EditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templateProject';

  logMoreValue(value: string) { // La valeur transmise par un EventEmitter, se récupère dans l'HTML avec $event
    console.log("Value :", value)
  }
}
