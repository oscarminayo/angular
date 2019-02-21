import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrutaComponent } from './card-fruta.component';

describe('CardFrutaComponent', () => {
  let component: CardFrutaComponent;
  let fixture: ComponentFixture<CardFrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
