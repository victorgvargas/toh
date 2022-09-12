import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHeoresComponent } from './manage-heores.component';

describe('ManageHeoresComponent', () => {
  let component: ManageHeoresComponent;
  let fixture: ComponentFixture<ManageHeoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHeoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHeoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
