import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamultiplicarpacoComponent } from './tablamultiplicarpaco.component';

describe('TablamultiplicarpacoComponent', () => {
  let component: TablamultiplicarpacoComponent;
  let fixture: ComponentFixture<TablamultiplicarpacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablamultiplicarpacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablamultiplicarpacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
