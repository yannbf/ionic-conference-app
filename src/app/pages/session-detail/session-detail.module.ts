import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionDetailPage } from './session-detail';
import { SessionDetailPageRoutingModule } from './session-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { CustomHeaderModule } from '../../custom-header/custom-header.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SessionDetailPageRoutingModule,
    CustomHeaderModule
  ],
  declarations: [
    SessionDetailPage,
  ]
})
export class SessionDetailModule { }
