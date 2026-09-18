import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-data',
  standalone: false,
  templateUrl: './search-data.html',
  styleUrls: ['./search-data.scss'],
})
export class SearchData implements OnInit {
  @Input() placeholder = '';
  @Input() initialValue = '';
  @Output() search = new EventEmitter<string>();

  searchTerm = new FormControl('', {
    nonNullable: true,
    validators:[
      // Validators.required,
      Validators.pattern(/^\d{5}-?\d{3}$/)
    ]
  })

  constructor(){}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.searchTerm.invalid || this.searchTerm?.value === '') {
      this.searchTerm.markAsTouched();
      return;
    }

    this.search.emit(this.searchTerm?.value)
  }

}
