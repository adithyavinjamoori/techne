import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPowerBiComponent } from './about-power-bi.component';

describe('AboutPowerBiComponent', () => {
  let component: AboutPowerBiComponent;
  let fixture: ComponentFixture<AboutPowerBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPowerBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPowerBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
