import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameLogoComponent } from './name-logo.component';

describe('NameLogoComponent', () => {
  let component: NameLogoComponent;
  let fixture: ComponentFixture<NameLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
