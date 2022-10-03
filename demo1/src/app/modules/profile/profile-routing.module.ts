import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { OverviewComponent } from './overview/overview.component';
// import { CampaignsComponent } from './campaigns/campaigns.component';
// import { DocumentsComponent } from './documents/documents.component';
// import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile.component';
// import { ConnectionsComponent } from './connections/connections.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateRegistrationComponent } from './update-registration/update-registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      // {
      //   path: 'overview',
      //   component: OverviewComponent,
      // },
      // {
      //   path: 'projects',
      //   component: ProjectsComponent,
      // },
      // {
      //   path: 'campaigns',
      //   component: CampaignsComponent,
      // },
      // {
      //   path: 'documents',
      //   component: DocumentsComponent,
      // },
      // {
      //   path: 'connections',
      //   component: ConnectionsComponent,
      // },
      {
       path:'All-users',
       component:AllUsersComponent,
      },
      {
        path:'registration',
        component:RegistrationComponent,
       },
       {
        path:'update-registration/:id',
        component:UpdateRegistrationComponent,
       },
       {
        path:'login',
        component:LoginComponent,
       },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
