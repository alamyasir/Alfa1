import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './AlfaMarine/components/home/home.component';
// import { BreadCrumbComponent } from './layout/main-header/bread-crumb/bread-crumb.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { UsersListComponent } from './components/users-list/users-list.component';
// import { ContractsListComponent } from './components/contracts-list/contracts-list.component';
// import { ChangeOrderComponent } from './components/change-order/change-order.component';
// import { ChangeOrderFormComponent } from './components/change-order/change-order-form/change-order-form.component';
// import { ContractFormComponent } from './components/contracts-list/contract-form/contract-form.component';
// import { SitesComponent } from './components/sites/sites.component';
// import { LoginComponent } from './components/auth/login/login.component';
// import { LayoutWrapperComponent } from './layout/layout-wrapper/layout-wrapper.component';
// import { SignupComponent } from './components/auth/signup/signup.component';
// import { ForgetpasswordComponent } from './components/auth/forgetpassword/forgetpassword.component';
// import { SetnewpasswordComponent } from './components/auth/setnewpassword/setnewpassword.component';
// import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';

export const routes: Routes = [


    // { path: 'login', component: LoginComponent },
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'forget-password', component: ForgetpasswordComponent},
    // { path: 'new-password', component: SetnewpasswordComponent},
    // { path: 'change-password', component: ChangePasswordComponent},

    // {
    //     path: 'layout',
    //     component: LayoutWrapperComponent, // Layout with header/footer
    //     children: [
    //         { path: 'breadcrumb', component: BreadCrumbComponent },
    //         { path: 'userList', component: UsersListComponent },
    //         { path: 'dashboard', component: DashboardComponent },
    //         { path: 'contractList', component: ContractsListComponent },
    //         { path: 'changeOrder', component: ChangeOrderComponent },
    //         { path: 'changeorderForm', component: ChangeOrderFormComponent },
    //         { path: 'contractForm', component: ContractFormComponent },
    //         { path: 'sites', component: SitesComponent },
    //         // Add more routes here
    //     ],
    // },


    // { path: 'breadcrumb', component: BreadCrumbComponent },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'userList', component: UsersListComponent },
    // { path: 'contractList', component: ContractsListComponent },
    // { path: 'changeOrder', component: ChangeOrderComponent },
    // { path: 'changeorderForm', component: ChangeOrderFormComponent },
    // { path: 'contractForm', component: ContractFormComponent },
    // { path: 'sites', component: SitesComponent },



];
