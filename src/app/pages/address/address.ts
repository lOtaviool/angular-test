import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { AddressService } from '../../services/address/address.service';
import { StoredAddress } from '../../interfaces/address';
import { NotificationService } from '../../services/notifications/notification.service';

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
    private notificationService: NotificationService
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

        if(address?.erro){
          this.notificationService.message('Nenhum endereço foi localizado!')
          return
        }

        this.addressService.saveNewAddress(storedAddress).subscribe({
          next: ()=>{
            this.notificationService.message('Endereço encontrado!')
          },
          error: error => {
            console.error('Erro ao salvar endereço:', error);
            this.notificationService.message('Nenhum endereço foi localizado!')
          }
        });

      },
      error: err => {
        console.log(err);
        this.notificationService.message('Nenhum endereço foi localizado!')
      }
    });
  }

  onDelete(id: number): void {
    this.addressService.deleteAddress(id).subscribe({
      next: ()=>{
        this.notificationService.message('Endereço deletado!')
      },
      error: error => {
        console.error(
          'Erro ao excluir endereço:',
          error
        );
      }
    });
  }

}
