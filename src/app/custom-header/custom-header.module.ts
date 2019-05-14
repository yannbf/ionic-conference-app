import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomHeaderComponent } from './custom-header.component';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [CustomHeaderComponent],
  exports: [CustomHeaderComponent]
})
export class CustomHeaderModule {}
