import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './Display/product-card/product-card.component';
import { ProductListComponent } from './Display/product-list/product-list.component';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
