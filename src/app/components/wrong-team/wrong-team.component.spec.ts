import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongTeamComponent } from './wrong-team.component';

describe('WrongTeamComponent', () => {
  let component: WrongTeamComponent;
  let fixture: ComponentFixture<WrongTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
