import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


export const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule
];
@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
