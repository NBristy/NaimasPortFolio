import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpBlogComponent } from './lp-blog.component';

describe('LpBlogComponent', () => {
  let component: LpBlogComponent;
  let fixture: ComponentFixture<LpBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
