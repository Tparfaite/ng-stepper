import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkStepperModule} from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InformationComponent } from './components/information/information.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SecurityComponent } from './components/security/security.component';
import { FinishComponent } from './components/finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    InformationComponent,
    ContactsComponent,
    SecurityComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule
  ],
  exports: [CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
