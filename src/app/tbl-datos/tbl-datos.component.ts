import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TblDatosDataSource, TblDatosItem } from './tbl-datos-datasource';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-tbl-datos',
  templateUrl: './tbl-datos.component.html',
  styleUrls: ['./tbl-datos.component.css']
})
export class TblDatosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TblDatosItem>;
  dataSource = new TblDatosDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombreInstitucion', 'tipoInstitucion', 'fechaIngreso', 'acciones'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

