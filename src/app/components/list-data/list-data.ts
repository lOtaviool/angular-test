import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoredAddress } from '../../interfaces/address';
import { formatDate } from '../../utils/formatDate';

@Component({
  selector: 'app-list-data',
  standalone: false,
  templateUrl: './list-data.html',
  styleUrl: './list-data.scss',
})
export class ListData implements OnInit {
  displayedColumns = ['cep', 'address', 'date', 'actions'];
  formatDate = formatDate;
  @Input() list_address: StoredAddress[] | null = [];
  @Output() delete = new EventEmitter<number>();


  constructor(){}

  ngOnInit(): void {}

  onDelete(id: number): void {
    this.delete.emit(id);
  }

}
