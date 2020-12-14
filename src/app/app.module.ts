import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BlankComponent } from './componentes/blank/blank.component';
import { ErrorComponent } from './componentes/error/error.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { IconosComponent } from './componentes/iconos/iconos.component';
import { GoogleComponent } from './componentes/google/google.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    PerfilComponent,
    BlankComponent,
    ErrorComponent,
    TablasComponent,
    IconosComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
