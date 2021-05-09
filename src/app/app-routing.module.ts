import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './vista/cliente/cliente.component';
import { InmuebleComponent } from './vista/inmueble/inmueble.component';
import { LavaderoComponent } from './vista/lavadero/lavadero.component';
import { VendedorComponent } from './vista/vendedor/vendedor.component';

const routes: Routes = [{path:'cliente',component: ClienteComponent},
{path:'vendedor', component: VendedorComponent},
{path: 'inmueble', component: InmuebleComponent},
{path: '', component: InmuebleComponent},
{path: 'prueba', component: LavaderoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
