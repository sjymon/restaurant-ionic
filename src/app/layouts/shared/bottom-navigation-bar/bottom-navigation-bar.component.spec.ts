import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomNavigationBarComponent } from './bottom-navigation-bar.component';
import { RouterModule } from '@angular/router';

describe('BottomNavigationBarComponent', () => {
  let component: BottomNavigationBarComponent;
  let fixture: ComponentFixture<BottomNavigationBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BottomNavigationBarComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
