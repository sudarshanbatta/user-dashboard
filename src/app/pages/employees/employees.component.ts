import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from 'src/app/shared/service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employeesList: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'roleType', 'age', 'action'];
  employeesData: any = [];
  submitted = false;
  edit: Boolean = false;
  editEmployeeData: any = {};
  addEmployeeForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _empService: EmployeesService,
    private formBuilder: FormBuilder
  ) {}
  get f() {
    return this.addEmployeeForm.controls;
  }
  ngOnInit(): void {
    this.getEmployeesData();
    this.addEmployeeForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }
  openEmpModal() {
    $('#EmployeeModal').show();
    this.editEmployeeData={}
    this.edit = false
  }
  close() {
    $('#EmployeeModal').hide();

  }
  getEmployeesData() {
    this._empService.getEmployees().subscribe((res) => {
      this.employeesData = res;
      console.log(res);
      this.employeesList = new MatTableDataSource(this.employeesData);
      this.employeesList.paginator = this.paginator;
    });
  }
  editData(data) {
    this.editEmployeeData = data;
    this.edit = true;
    this.submitted = false;
    $('#EmployeeModal').show();
  }
  deleteEmp(index) {
    console.log(index);
    this.employeesData.splice(index, 1);
    this.employeesList = new MatTableDataSource(this.employeesData);
    this.employeesList.paginator = this.paginator;
  }
  saveEmployee() {
    this.submitted = true;
    if (this.addEmployeeForm.invalid) {
      return;
    } else {
      this.employeesData.push(this.addEmployeeForm.value);
      this.employeesList = new MatTableDataSource(this.employeesData);
      this.employeesList.paginator = this.paginator;
      console.log(this.employeesData);
      this.addEmployeeForm.reset();
      $('#EmployeeModal').hide();
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.employeesList.filter = filterValue;
  }
}
