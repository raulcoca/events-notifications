import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {TranslatePipe} from "@ngx-translate/core";
import {ListEventsComponent} from "../components/list-events/list-events.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    TranslatePipe,
    ListEventsComponent
  ],
  declarations: [Tab1Page, ]
})
export class Tab1PageModule {}
