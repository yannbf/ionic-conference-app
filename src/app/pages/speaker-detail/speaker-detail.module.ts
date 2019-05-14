import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakerDetailPage } from './speaker-detail';
import { SpeakerDetailPageRoutingModule } from './speaker-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { CustomHeaderModule } from '../../custom-header/custom-header.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerDetailPageRoutingModule,
    CustomHeaderModule
  ],
  declarations: [
    SpeakerDetailPage,
  ]
})
export class SpeakerDetailModule { }
