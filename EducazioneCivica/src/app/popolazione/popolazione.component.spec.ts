import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopolazioneComponent } from './popolazione.component';

describe('PopolazioneComponent', () => {
  let component: PopolazioneComponent;
  let fixture: ComponentFixture<PopolazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopolazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopolazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
