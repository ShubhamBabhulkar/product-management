import { AddProductPopupComponent } from './components/add-product-popup/add-product-popup.component';
import { MatcomponentModule } from './models/matcomponent/matcomponent.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboarComponent } from './components/product-dashboar/product-dashboar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductDashboarComponent,
    SigninComponent,
    SideNavComponent,
    InfoTableComponent,
    AddProductPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatcomponentModule,
    MatDialogModule
  ],
  providers: [TopBarComponent, AddProductPopupComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddProductPopupComponent]
})
export class AppModule { }
