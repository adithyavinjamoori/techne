import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevopsComponent } from './about-devops.component';

describe('AboutDevopsComponent', () => {
  let component: AboutDevopsComponent;
  let fixture: ComponentFixture<AboutDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDevopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
