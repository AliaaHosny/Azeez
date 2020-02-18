import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkipModalPage } from './skip-modal.page';

describe('SkipModalPage', () => {
  let component: SkipModalPage;
  let fixture: ComponentFixture<SkipModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkipModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
