import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopolazioeComponent } from './popolazioe.component';

describe('PopolazioeComponent', () => {
  let component: PopolazioeComponent;
  let fixture: ComponentFixture<PopolazioeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopolazioeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopolazioeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
