import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpFooterComponent } from './lp-footer.component';

describe('LpFooterComponent', () => {
  let component: LpFooterComponent;
  let fixture: ComponentFixture<LpFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
