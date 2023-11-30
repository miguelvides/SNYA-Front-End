import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TblPresupuestoDataSource, TblPresupuestoItem } from './tbl-presupuesto-datasource';

@Component({
  selector: 'app-tbl-presupuesto',
  templateUrl: './tbl-presupuesto.component.html',
  styleUrls: ['./tbl-presupuesto.component.css']
})
export class TblPresupuestoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TblPresupuestoItem>;
  dataSource = new TblPresupuestoDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','acciones'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
