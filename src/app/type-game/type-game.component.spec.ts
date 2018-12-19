import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGameComponent } from './type-game.component';

describe('TypeGameComponent', () => {
  let component: TypeGameComponent;
  let fixture: ComponentFixture<TypeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
