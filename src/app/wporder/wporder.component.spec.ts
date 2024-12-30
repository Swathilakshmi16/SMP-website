import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WporderComponent } from './wporder.component';

describe('WporderComponent', () => {
  let component: WporderComponent;
  let fixture: ComponentFixture<WporderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WporderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
