import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Error404Component } from './components/error404/error404.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { PaginaDirectivaComponent } from './components/pagina-directiva/pagina-directiva.component';
import { FlujoComponent } from './components/flujo/flujo.component';
import { PaginaPipeComponent } from './components/pagina-pipe/pagina-pipe.component';
import { PaginaArrayComponent } from './components/pagina-array/pagina-array.component';
import { PaginaComparadorComponent } from './components/pagina-comparador/pagina-comparador.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PaginaServiceComponent } from './components/pagina-service/pagina-service.component';
import { FrutasComponent } from './components/frutas/frutas.component';
import { PersonasComponent } from './components/personas/personas.component';
import { TodosComponent } from './components/todos/todos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:repeticiones', component: AboutComponent },  
  { path: 'juego', component: PruebaComponent }, 
  { path: '404', component: Error404Component }, 
  { path: 'saludar', component: SaludarComponent},
  { path: 'directiva', component: PaginaDirectivaComponent},
  { path: 'flujo', component: FlujoComponent},
  { path: 'pipe', component: PaginaPipeComponent},
  { path: 'arrays', component: PaginaArrayComponent },
  { path: 'comparador', component: PaginaComparadorComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'service', component: PaginaServiceComponent },
  { path: 'frutas', component: FrutasComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'todos', component: TodosComponent },
  { path: '**', pathMatch:'full', redirectTo : '404'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }