import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Error404Component } from './components/error404/error404.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { PaginaDirectivaComponent } from './components/pagina-directiva/pagina-directiva.component';
import { Directiva1Directive } from './directives/directiva1.directive';
import { CountdownDirective } from './directives/countdown.directive';
import { FlujoComponent } from './components/flujo/flujo.component';
import { PaginaPipeComponent } from './components/pagina-pipe/pagina-pipe.component';
import { MonedaPipe } from './pipes/moneda.pipe';
import { EspaciosPipe } from './pipes/espacios.pipe';
import { PaginaArrayComponent } from './components/pagina-array/pagina-array.component';
import { FiltroOfertaPipe } from './pipes/filtro-oferta.pipe';
import { PaginaComparadorComponent } from './components/pagina-comparador/pagina-comparador.component';
import { CardFrutaComponent } from './components/card-fruta/card-fruta.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PaginaServiceComponent } from './components/pagina-service/pagina-service.component';
import { FrutasComponent } from './components/frutas/frutas.component';
import { PersonasComponent } from './components/personas/personas.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ComponentsComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    SaludarComponent,
    PaginaDirectivaComponent,
    Directiva1Directive,
    CountdownDirective,
    FlujoComponent,
    PaginaPipeComponent,
    MonedaPipe,
    EspaciosPipe,
    PaginaArrayComponent,
    FiltroOfertaPipe,
    PaginaComparadorComponent,
    CardFrutaComponent,
    TraductorComponent,
    CarritoComponent,
    PaginaServiceComponent,
    FrutasComponent,
    PersonasComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
