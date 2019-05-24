import { NgModule } from '@angular/core';
import * as Mat from '@angular/material';

@NgModule({
  exports: [
    Mat.MatButtonModule, Mat.MatTabsModule, Mat.MatIconModule,
    Mat.MatMenuModule, Mat.MatCardModule, Mat.MatTooltipModule, Mat.MatExpansionModule, Mat.MatInputModule,
    Mat.MatRadioModule, Mat.MatDialogModule, Mat.MatToolbarModule
  ]
})
export class MaterialUiModule { }
