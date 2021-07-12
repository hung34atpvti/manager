import { OrganizationDetailComponent } from './organization/organization-detail/organization-detail.component';
import { OrganizationComponent } from './organization/organization.component';
import { LoginComponent } from './core/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'organization/:oid', component: OrganizationDetailComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
