import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGenerateComponent } from './report-generate.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ReportGenerateComponent', () => {
  let component: ReportGenerateComponent;
  let fixture: ComponentFixture<ReportGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGenerateComponent ],
      imports: [
        MatDialogModule,
        HttpClientModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
