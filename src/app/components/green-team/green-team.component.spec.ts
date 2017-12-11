import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenTeamComponent } from './green-team.component';

describe('GreenTeamComponent', () => {
  let component: GreenTeamComponent;
  let fixture: ComponentFixture<GreenTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
