import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticaRxjsComponent } from './pratica-rxjs.component';

describe('PraticaRxjsComponent', () => {
  let component: PraticaRxjsComponent;
  let fixture: ComponentFixture<PraticaRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraticaRxjsComponent]
    });
    fixture = TestBed.createComponent(PraticaRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
