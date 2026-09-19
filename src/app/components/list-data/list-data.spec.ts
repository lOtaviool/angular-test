import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListData } from './list-data';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

describe('ListData', () => {
  let component: ListData;
  let fixture: ComponentFixture<ListData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListData],
      imports: [
        MatIconModule,
        MatTableModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
