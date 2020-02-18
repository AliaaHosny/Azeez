import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceivingOptionsPage } from './receiving-options.page';

describe('ReceivingOptionsPage', () => {
  let component: ReceivingOptionsPage;
  let fixture: ComponentFixture<ReceivingOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivingOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivingOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
