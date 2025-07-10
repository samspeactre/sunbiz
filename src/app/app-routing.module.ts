import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ChargesAndPaymentsComponent } from './charges-and-payments/charges-and-payments.component';
import { DocumentsComponent } from './documents/documents.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AccountingComponent } from './accounting/accounting.component';
import { QuestionRequestComponent } from './question-request/question-request.component';
import { PortalComponent } from './portal/portal.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'payments', component: ChargesAndPaymentsComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'subscription', component: SubscriptionComponent},
  {path: 'accounting', component: AccountingComponent},
  {path: 'question-request', component: QuestionRequestComponent},
  {path: 'portal', component: PortalComponent},
  {path: 'setting', component: SettingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
