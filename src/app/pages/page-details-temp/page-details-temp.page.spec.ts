import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageDetailsTempPage } from './page-details-temp.page';

describe('PageDetailsTempPage', () => {
  let component: PageDetailsTempPage;
  let fixture: ComponentFixture<PageDetailsTempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailsTempPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageDetailsTempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
