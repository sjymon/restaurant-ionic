import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { BottomNavigationBarComponent } from './bottom-navigation-bar/bottom-navigation-bar.component';

@NgModule({
  declarations: [TopNavigationBarComponent, BottomNavigationBarComponent],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [TopNavigationBarComponent, BottomNavigationBarComponent],
})
export class SharedModule {}
