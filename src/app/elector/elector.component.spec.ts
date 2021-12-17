import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorComponent } from './elector.component';

describe('ElectorComponent', () => {
  let component: ElectorComponent;
  let fixture: ComponentFixture<ElectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
