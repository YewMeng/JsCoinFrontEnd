import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletbalanceComponent } from './wallet-balance.component';

describe('WalletbalanceComponent', () => {
  let component: WalletbalanceComponent;
  let fixture: ComponentFixture<WalletbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
