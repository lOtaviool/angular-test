import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchData } from './search-data';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchData', () => {
  let component: SearchData;
  let fixture: ComponentFixture<SearchData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchData],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
