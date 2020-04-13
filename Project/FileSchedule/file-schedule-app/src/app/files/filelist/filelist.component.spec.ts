import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelistComponent } from './filelist.component';
<<<<<<< HEAD
import { FileService } from 'src/app/services/file.service';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FilesModule } from '../files.module';
=======
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FileService } from 'src/app/services/file.service';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 94c059a81ea056e2d0dc6e875ff8b17b20d4e80e

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
<<<<<<< HEAD
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
=======
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        FormsModule
      ],
      providers: [
        {provide: FileService, useValue: fileServiceTest}
>>>>>>> 94c059a81ea056e2d0dc6e875ff8b17b20d4e80e
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

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
  it('Shoud open File Open Model', () => {
    spyOn(component, 'openModal');
    const button = fixture.debugElement.nativeElement.querySelector('button');
=======

  //  For Report generate Button Unit tests
  it('should open Report generate Modal', () => {
    spyOn(component, 'openModal');
    let button = fixture.debugElement.nativeElement.querySelector('button');
>>>>>>> 94c059a81ea056e2d0dc6e875ff8b17b20d4e80e
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openModal).toHaveBeenCalled();
    });
  });
<<<<<<< HEAD
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
describe('MaterialTable of filelist Component data', () => {
  let fixture: ComponentFixture<FilelistComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilesModule],  // MatTableModule
      declarations: [ FilelistComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FilelistComponent);
    de = fixture.debugElement;
  });
  it('should has correct rows', () => {
    fixture.detectChanges();
    // query debug elements doesn't work
    const rowDebugElements = de.queryAll(By.css('tbody tr'));
    expect(rowDebugElements.length).toBe(0);
    // has to fallback to query DOM elements
    const rowHtmlElements = de.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(10);
  });
=======
>>>>>>> 94c059a81ea056e2d0dc6e875ff8b17b20d4e80e
});
