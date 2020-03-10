import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ ]
})
export class AppComponent {

  constructor ( public _infoPaginaService: InfoPaginaService,
                public _productosService: ProductosService ) {

  }
}
