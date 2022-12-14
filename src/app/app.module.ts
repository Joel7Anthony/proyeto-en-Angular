import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { SharedComponent } from './pages/shared/shared.component';
import { BreadCrumbsComponent } from './pages/shared/bread-crumbs/bread-crumbs.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { NavLeftComponent } from './pages/shared/nav-left/nav-left.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    DashboardComponent,
    ProductComponent,
    SharedComponent,
    BreadCrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NavLeftComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
