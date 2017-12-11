import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeTeamComponent } from './orange-team.component';

describe('OrangeTeamComponent', () => {
  let component: OrangeTeamComponent;
  let fixture: ComponentFixture<OrangeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
