import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Address } from './address';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchData } from '../../components/search-data/search-data';
import { ListData } from '../../components/list-data/list-data';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

describe('Address', () => {
  let component: Address;
  let fixture: ComponentFixture<Address>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Address,
        SearchData,
        ListData
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        NgxMaskDirective
      ],
      providers:[
        provideNgxMask()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Address);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
