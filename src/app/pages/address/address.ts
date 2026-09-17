import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { AddressService } from '../../services/address/address.service';
import { StoredAddress } from '../../interfaces/address';

@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.html',
  styleUrls: ['./address.scss'],
})
export class Address implements OnInit {
  address$: Observable<any>;

  constructor(
    private addressService: AddressService,
  ){
    this.address$ = this.addressService.address$;
  }

  ngOnInit(): void {}

  onSearch(term: string): void{
    this.addressService.getAddressByCep(term).pipe().subscribe({
      next: (address) => {
        const storedAddress: StoredAddress = {
          ...address,
          date: new Date
        }

        this.addressService.saveNewAddress(storedAddress).subscribe({
          error: error => {
            console.error('Erro ao salvar endereço:', error);
          }
        });

      },
      error: err => console.log(err)
    });
  }

}
