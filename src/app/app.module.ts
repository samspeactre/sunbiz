import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToggleComponent } from './toggle/toggle.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ChargesAndPaymentsComponent } from './charges-and-payments/charges-and-payments.component';
import { DocumentsComponent } from './documents/documents.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AccountingComponent } from './accounting/accounting.component';
import { PrintComponent } from './print/print.component';
import { QuestionRequestComponent } from './question-request/question-request.component';
import { PortalComponent } from './portal/portal.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ToggleComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    ChargesAndPaymentsComponent,
    DocumentsComponent,
    SubscriptionComponent,
    AccountingComponent,
    PrintComponent,
    QuestionRequestComponent,
    PortalComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonToggleModule,
    CdkAccordionModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
