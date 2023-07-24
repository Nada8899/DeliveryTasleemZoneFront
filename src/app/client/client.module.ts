import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddjobComponent } from './addjob/addjob.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { JobPorposalsComponent } from './job-porposals/job-porposals.component';
import { PorposalDetailsComponent } from './porposal-details/porposal-details.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AddjobComponent,
    MyProjectComponent,
    JobPorposalsComponent,
    PorposalDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AddjobComponent,
    MyProjectComponent,
    JobPorposalsComponent,
    PorposalDetailsComponent
  ]
})
export class ClientModule { }
