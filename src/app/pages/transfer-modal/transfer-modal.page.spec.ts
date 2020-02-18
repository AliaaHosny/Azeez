import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferModalPage } from './transfer-modal.page';

describe('TransferModalPage', () => {
  let component: TransferModalPage;
  let fixture: ComponentFixture<TransferModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
