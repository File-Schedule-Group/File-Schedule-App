import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelistComponent } from './filelist.component';
import { FileService } from 'src/app/services/file.service';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FilesModule } from '../files.module';
import { FileData } from 'src/app/models/FileData';

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
    const button = fixture.debugElement.nativeElement.querySelector('button');
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


describe('FilelistComponent Dataloading in mat-table', () => {
  let fileServiceTest: jasmine.SpyObj<FileService>;
  let fixture;
  let component;
  beforeEach(async(() => {
    fileServiceTest = jasmine.createSpyObj('FileService', ['getFiles']);
    fileServiceTest.getFiles.and.returnValue(of());

    TestBed.configureTestingModule({
      declarations: [ FilelistComponent ],
      imports: [
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
  const testFiles: FileData[] = [
    { fileID: 1, fileName: 'abc', filePath: 'c/1', category: 'admin' },
    { fileID: 2, fileName: 'efg', filePath: 'c/2', category: 'user1' },
    { fileID: 3, fileName: 'asd', filePath: 'c/3', category: 'user2' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilelistComponent ],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table Data', (done) => {
    component.FileData = testFiles;
    component.dataSource = new MatTableDataSource(testFiles);

    expect(component.FileData).toEqual(testFiles);
    // expect(component.FileData).toEqual(component.dataSource);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);

      // Header row
      const headerRow = tableRows[0];
      expect(headerRow.cells[3].innerHTML).toBe('');
      expect(headerRow.cells[0].innerHTML).toBe('Name');
      expect(headerRow.cells[1].innerHTML).toBe('Path');
      expect(headerRow.cells[2].innerHTML).toBe('Category');

      // Data rows
      const row1 = tableRows[1];
      // expect(row1.cells[3].innerHTML).toBe(1);
      console.log(row1);
      expect(row1.cells[0].innerHTML).toBe('abc');
      expect(row1.cells[1].innerHTML).toBe('c/1');
      expect(row1.cells[2].innerHTML).toBe('admin');

      const row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe('efg');
      expect(row2.cells[1].innerHTML).toBe('c/2');
      expect(row2.cells[2].innerHTML).toBe('user1');
      // expect(row1.cells[3].innerHTML).toBe('c/2');

      const row3 = tableRows[3];
      // expect(row3.cells[3].innerHTML).toBe(3);
      expect(row3.cells[0].innerHTML).toBe('asd');
      expect(row3.cells[1].innerHTML).toBe('c/3');
      expect(row1.cells[2].innerHTML).toBe('admin');

      done();
    });
  });
});
