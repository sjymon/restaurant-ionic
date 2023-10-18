import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [PublicLayoutComponent, DefaultLayoutComponent],
  imports: [IonicModule, CommonModule, RouterModule, SharedModule],
  exports: [PublicLayoutComponent, DefaultLayoutComponent],
})
export class LayoutsModule {}
