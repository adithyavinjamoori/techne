import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAzureComponent } from './about-azure.component';

describe('AboutAzureComponent', () => {
  let component: AboutAzureComponent;
  let fixture: ComponentFixture<AboutAzureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAzureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
