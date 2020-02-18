import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreshAdsPage } from './fresh-ads.page';

describe('FreshAdsPage', () => {
  let component: FreshAdsPage;
  let fixture: ComponentFixture<FreshAdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshAdsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreshAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
