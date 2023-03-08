import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsbackgroundComponent } from './formsbackground.component';

describe('FormsbackgroundComponent', () => {
  let component: FormsbackgroundComponent;
  let fixture: ComponentFixture<FormsbackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsbackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
