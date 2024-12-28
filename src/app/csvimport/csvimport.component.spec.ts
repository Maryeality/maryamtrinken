import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSVImportComponent } from './csvimport.component';

describe('CSVImportComponent', () => {
  let component: CSVImportComponent;
  let fixture: ComponentFixture<CSVImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSVImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSVImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
