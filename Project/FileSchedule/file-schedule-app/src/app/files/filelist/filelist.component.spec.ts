import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelistComponent } from './filelist.component';
import { FileService } from 'src/app/services/file.service';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

describe('FilelistComponent', () => {
  let component: FilelistComponent;
  let fixture: ComponentFixture<FilelistComponent>;
  let fileServiceTest: jasmine.SpyObj<FileService>;

  beforeEach(async(() => {
    fileServiceTest = jasmine.createSpyObj('FileService', ['getFiles']);
    fileServiceTest.getFiles.and.returnValue(of());

    TestBed.configureTestingModule({
      declarations: [ FilelistComponent ],
      imports: [
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: FileService, useValue: fileServiceTest},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shoud open File Open Model', () => {
    spyOn(component, 'openModal');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openModal).toHaveBeenCalled();
    });
  });
//  For Generate Button Unit tests


  // it('Shoud open File Genarate Model', () => {
  //   spyOn(component, 'onGenerate');
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();

  //   fixture.whenStable().then(()=>{
  //     expect(component.onGenerate).toHaveBeenCalled();
  //   });
  // });
});
