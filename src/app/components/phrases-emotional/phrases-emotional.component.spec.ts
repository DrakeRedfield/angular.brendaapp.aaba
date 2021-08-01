import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesEmotionalComponent } from './phrases-emotional.component';

describe('PhrasesEmotionalComponent', () => {
  let component: PhrasesEmotionalComponent;
  let fixture: ComponentFixture<PhrasesEmotionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhrasesEmotionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesEmotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
