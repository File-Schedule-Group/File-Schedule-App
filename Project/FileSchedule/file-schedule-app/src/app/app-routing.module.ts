import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
                        { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
                        { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
