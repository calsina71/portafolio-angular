import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdx } from '../interfaces/producto-idx-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos_idx: ProductoIdx[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    this.http.get('https://angular-html-3efda.firebaseio.com/productos_idx.json')
        .subscribe( (productos: ProductoIdx[]) =>{
          console.log( productos );
          this.productos_idx= productos;
          // setTimeout(() => {
            this.cargando = false;
          // }, 1000);

        });
  }

}
