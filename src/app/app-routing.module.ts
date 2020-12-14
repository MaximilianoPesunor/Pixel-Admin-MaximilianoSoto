import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './componentes/blank/blank.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { GoogleComponent } from './componentes/google/google.component';
import { IconosComponent } from './componentes/iconos/iconos.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { TablasComponent } from './componentes/tablas/tablas.component';

const routes: Routes = [
{path: 'dashboard', component: DashboardComponent },
{path: 'Perfil', component: PerfilComponent },
{path: 'Tabla', component: TablasComponent },
{path: 'Iconos', component: IconosComponent },
{path: 'GoogleMap', component: GoogleComponent },
{path: 'Blank', component: BlankComponent},
{path: '', redirectTo: '/Perfil', pathMatch: 'full' },
{path: 'Error', component: ErrorComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
