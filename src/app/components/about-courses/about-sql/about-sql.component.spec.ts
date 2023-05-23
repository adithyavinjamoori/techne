import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSqlComponent } from './about-sql.component';

describe('AboutSqlComponent', () => {
  let component: AboutSqlComponent;
  let fixture: ComponentFixture<AboutSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
