import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpprocessComponent } from './wpprocess.component';

describe('WpprocessComponent', () => {
  let component: WpprocessComponent;
  let fixture: ComponentFixture<WpprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpprocessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
