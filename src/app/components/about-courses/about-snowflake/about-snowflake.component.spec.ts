import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSnowflakeComponent } from './about-snowflake.component';

describe('AboutSnowflakeComponent', () => {
  let component: AboutSnowflakeComponent;
  let fixture: ComponentFixture<AboutSnowflakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSnowflakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSnowflakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
