import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

const routes: Routes = [
  {
    //Ruta localhost:62397/home
    path: 'home',
    //Componente
    component: HomeComponent
  },
  {
    //Ruta localhost:62397/admin/view/${id}
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },
  {
    //Ruta localhost:62397/admin
    path: 'admin',
    component: AdminComponent
  },
  {
    //Ruta localhost:62397/galeria
    path: 'galeria',
    component: ImageGalleryComponent
  },
  {
    //Ruta localhost:62397/galeria
    path: 'galeria/detalle/:id',
    component: ImageDetailsComponent
  },
  {
    //Ruta localhost:62397/cualquier cosa que no corresponda 404 por ejemplo
    path: '**',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
