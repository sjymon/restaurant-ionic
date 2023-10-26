import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaultLayoutComponent } from './default-layout.component';
import { BottomNavigationBarComponent } from '@layout/shared/bottom-navigation-bar/bottom-navigation-bar.component';
import { TopNavigationBarComponent } from '@layout/shared/top-navigation-bar/top-navigation-bar.component';
import { Router, RouterModule } from '@angular/router';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefaultLayoutComponent,
        TopNavigationBarComponent,
        BottomNavigationBarComponent,
      ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
