import { TestBed } from '@angular/core/testing';
import { AddressService } from './address.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockAddress = {
  bairro: "Santa Efigênia",
  cep: "30110-013",
  complemento: "de 2563 a 3071 - lado ímpar",
  ddd: "31",
  estado: "Minas Gerais",
  gia: "",
  ibge: "3106200",
  localidade: "Belo Horizonte",
  logradouro: "Avenida do Contorno",
  regiao: "Sudeste",
  siafi: "4123",
  uf: "MG",
  unidade: ""
}

describe('AddressService', () => {
  let service: AddressService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddressService]
    });

    httpMock = TestBed.inject(HttpTestingController)
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call request getAddressByCep', ()=>{
    const cep = "30110013";
    service.getAddressByCep(cep).subscribe();

    const request = httpMock.expectOne(`${service.URL_BASE}/${cep}/json`);
    expect(request.request.method).toBe('GET');
    request.flush(mockAddress) 
  })
});
