import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule], // FormsModule permet l'utilisation de ngModel
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Input()
  searchValue: string = ""
  @Output()
  searchValueChange: EventEmitter<string> = new EventEmitter<string>()

  get search() {
    return this.searchValue
  }

  set search(value: string) {
    this.searchValue = value
    this.searchValueChange.emit(value)
  }
}
