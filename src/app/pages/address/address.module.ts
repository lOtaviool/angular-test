import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address } from './address';

@NgModule({
  declarations: [Address],
  imports: [CommonModule],
  exports: [Address]
})
export class AddressModule {}