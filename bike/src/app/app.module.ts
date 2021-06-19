import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    ImageDetailsComponent,
    ImageGalleryComponent,
    ViewRegistrationComponent /* */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /* */
    ReactiveFormsModule, /* */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
