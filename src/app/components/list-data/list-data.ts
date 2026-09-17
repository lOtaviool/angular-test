import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoredAddress } from '../../interfaces/address';

@Component({
  selector: 'app-list-data',
  standalone: false,
  templateUrl: './list-data.html',
  styleUrl: './list-data.scss',
})
export class ListData implements OnInit {
  displayedColumns = ['cep', 'address', 'date', 'actions'];
  @Input() list_address: StoredAddress[] | null = [];
  // @Output() search = new EventEmitter<string>();

  constructor(){
    console.log(this.list_address)
  }

  ngOnInit(): void {}

}
