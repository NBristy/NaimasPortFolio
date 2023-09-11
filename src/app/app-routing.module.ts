import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/core/layouts/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TopComponent } from './pages/top/top.component';
import { DialogsComponent } from './pages/dialogs/dialogs.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children : [
      { path: 'top', component: TopComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dialogs', component: DialogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   { 
//     path : '',
//     component: MainLayoutComponent,
//     children : [
//       { path: '', redirectTo: '/top', pathMatch: 'full' },
//       { path: 'login',                    component: LoginIndexComponent},
//       { path: 'top',                      component: TopComponent, canActivate: [AuthService] },
//       { path: 'work-record/index',        component: WorkRecordIndexComponent, canActivate: [AuthService] },
//       { path: 'work-record/detail',       component: WorkRecordDetailComponent, canActivate: [AuthService] },
//       { path: 'work-record/detail/:id',   component: WorkRecordDetailComponent, canActivate: [AuthService] },
//       { path: 'worker/index',             component: WorkerIndexComponent, canActivate: [AuthService] },
//       { path: 'error-detail',             component: ErrorDetailComponent, canActivate: [AuthService] },
//       { path: 'error-detection/index',    component: ErrorDetectionIndexComponent, canActivate: [AuthService] },
//       { path: 'standard-work-list',       component: StandardWorkListIndexComponent, canActivate: [AuthService] },
//     ]
//   }
// ];