import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlinksComponent } from './contactlinks.component';

describe('ContactlinksComponent', () => {
  let component: ContactlinksComponent;
  let fixture: ComponentFixture<ContactlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
