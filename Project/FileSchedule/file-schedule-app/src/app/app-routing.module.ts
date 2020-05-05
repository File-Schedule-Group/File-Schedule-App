import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
                        { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) }];
=======
const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
                        { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
                        { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }];
>>>>>>> 56a42b09c73d17aa065b98cd5ee29b023165ca6c

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
