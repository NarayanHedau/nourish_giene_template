import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
// import { OverviewComponent } from './overview/overview.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { CampaignsComponent } from './campaigns/campaigns.component';
// import { DocumentsComponent } from './documents/documents.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
// import { ConnectionsComponent } from './connections/connections.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import { AllUsersComponent } from './all-users/all-users.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRegistrationComponent } from './update-registration/update-registration.component';
import { SearchwordPipe } from './all-users/searchword.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ProfileComponent,
    // OverviewComponent,
    // ProjectsComponent,
    // CampaignsComponent,
    // DocumentsComponent,
    // ConnectionsComponent,
    AllUsersComponent,
  
    RegistrationComponent,
        UpdateRegistrationComponent,
        SearchwordPipe,
        LoginComponent,

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    NgxPaginationModule,ReactiveFormsModule,
    FormsModule
    
  ],
})
export class ProfileModule {}
