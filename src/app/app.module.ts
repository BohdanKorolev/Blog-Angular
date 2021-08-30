import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/pages/home/home.component';
import {HeaderComponent} from './components/common/header/header.component';
import {RegistrationComponent} from './components/pages/registration/registration.component';
import {AuthComponent} from './components/pages/auth/auth.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/common/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxSpinnerModule} from "ngx-spinner";
import { AddCategoryModalComponent } from './components/pages/dashboard/add-category-modal/add-category-modal.component';
import {BsModalRef, ModalModule} from "ngx-bootstrap/modal";
import { RemoveCategoryModalComponent } from './components/pages/dashboard/remove-category-modal/remove-category-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent,
    AuthComponent,
    DashboardComponent,
    FooterComponent,
    AddCategoryModalComponent,
    RemoveCategoryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
