import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Mat from '@angular/material';


@NgModule({
  exports: [FlexLayoutModule, Mat.MatToolbarModule, Mat.MatButtonModule, Mat.MatInputModule, Mat.MatCardModule, Mat.MatTabsModule ]
})
export class MaterialUIModule { }
