import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpCommentsComponent } from './lp-comments.component';

describe('LpCommentsComponent', () => {
  let component: LpCommentsComponent;
  let fixture: ComponentFixture<LpCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
