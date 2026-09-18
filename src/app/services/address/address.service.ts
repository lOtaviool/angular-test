import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, tap } from 'rxjs';
import { StoredAddress } from '../../interfaces/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  public URL_BASE = 'https://viacep.com.br/ws';
  private http = inject(HttpClient);
  private readonly dbName = 'address-db';
  private readonly storeName = 'addresses';
  private readonly dbVersion = 1;

  private addressSubject = new BehaviorSubject<StoredAddress[]>([]);
  address$ = this.addressSubject.asObservable();

  constructor(){
    this.getlistAddress()
  }

  getAddressByCep(term: string): Observable<StoredAddress>{
    const url = `${this.URL_BASE}/${term}/json`;
    return this.http.get<StoredAddress>(url)
  }

  private openDataBase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject)=>{
      const request = indexedDB.open(
        this.dbName,
        this.dbVersion
      )

      request.onupgradeneeded = () =>{
        const db = request.result

        if(!db.objectStoreNames.contains(this.storeName)){
          db.createObjectStore(this.storeName,{
            keyPath: 'id',
            autoIncrement: true
          })
        }
      }

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    })
  }

  private getAllFromDatabase(): Promise<StoredAddress[]> {
    return this.openDataBase().then(db => {
      return new Promise<StoredAddress[]>((resolve, reject) => {
        const transaction = db.transaction(this.storeName,'readonly');
        const store = transaction.objectStore(this.storeName);
        const request = store.getAll();

        request.onsuccess = () => {
          resolve(request.result);
        };

        request.onerror = () => {
          reject(request.error);
        };
      });
    });
  }

  getlistAddress(): void {
    from(this.getAllFromDatabase()).subscribe({
      next: addresses => {
        this.addressSubject.next(addresses);
      },
      error: error => {
        console.error(
          'Erro ao carregar endereços:',
          error
        );
      }
    });
  }

  saveNewAddress(address: StoredAddress): Observable<StoredAddress> {
    return from(
      this.openDataBase().then(db => {
        return new Promise<StoredAddress>(
          (resolve, reject) => {
            const transaction = db.transaction(this.storeName,'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.add(address);

            request.onsuccess = () => {
              const savedAddress: StoredAddress = {
                ...address,
                id: request.result as number
              };

              this.getAllFromDatabase()
                .then(addresses => {
                  this.addressSubject.next(
                    addresses
                  );
                });

              resolve(savedAddress);
            };

            request.onerror = () => {
              reject(request.error);
            };
          }
        );
      })
    );
  }

  deleteAddress(id: number): Observable<void> {
    return from(
      this.openDataBase().then(db => {
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(id);

            request.onsuccess = () => {
              this.getAllFromDatabase()
                .then(addresses => {
                  this.addressSubject.next(
                    addresses
                  );
                });

              resolve();
            };

            request.onerror = () => {
              reject(request.error);
            };
          }
        );
      })
    );
  }

}
