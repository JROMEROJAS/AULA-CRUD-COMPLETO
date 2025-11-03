import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaList } from './aula-list';

describe('AulaList', () => {
  let component: AulaList;
  let fixture: ComponentFixture<AulaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
