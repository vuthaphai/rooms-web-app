import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenu } from './vertical-menu';

describe('VerticalMenu', () => {
  let component: VerticalMenu;
  let fixture: ComponentFixture<VerticalMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
