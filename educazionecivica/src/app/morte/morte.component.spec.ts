import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorteComponent } from './morte.component';

describe('MorteComponent', () => {
  let component: MorteComponent;
  let fixture: ComponentFixture<MorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
