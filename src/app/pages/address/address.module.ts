import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address } from './address';
import { SearchData } from '../../components/search-data/search-data';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ListData } from '../../components/list-data/list-data';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    Address,
    SearchData,
    ListData
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    NgxMaskDirective
  ],
  exports: [Address],
  providers:[
    provideNgxMask()
  ]
})
export class AddressModule {}