import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Mat from '@angular/material';
import { MatSnackBarModule, MatTableModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  exports: [
    FlexLayoutModule, 
    Mat.MatToolbarModule, 
    Mat.MatButtonModule, 
    Mat.MatInputModule, 
    MatPaginatorModule,
    MatSnackBarModule,
    Mat.MatCardModule, 
    Mat.MatTabsModule,
    MatTableModule,
   ]
})
export class MaterialUIModule { }
