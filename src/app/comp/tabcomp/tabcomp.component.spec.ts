import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabcompComponent } from './tabcomp.component';

describe('TabcompComponent', () => {
  let component: TabcompComponent;
  let fixture: ComponentFixture<TabcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
