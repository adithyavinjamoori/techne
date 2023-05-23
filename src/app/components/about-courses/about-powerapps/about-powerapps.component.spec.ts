import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPowerappsComponent } from './about-powerapps.component';

describe('AboutPowerappsComponent', () => {
  let component: AboutPowerappsComponent;
  let fixture: ComponentFixture<AboutPowerappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPowerappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPowerappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
