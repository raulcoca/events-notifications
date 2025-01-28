import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {TranslatePipe} from "@ngx-translate/core";
import {LoginComponent} from "../components/login/login.component";
import {AddEditEventsComponent} from "../components/add-edit-events/add-edit-events.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    TranslatePipe,

  ],
  declarations: [Tab2Page, LoginComponent, AddEditEventsComponent],
})
export class Tab2PageModule {}
