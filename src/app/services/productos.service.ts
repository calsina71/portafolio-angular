import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdx } from '../interfaces/producto-idx-interface';
import { Producto } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos_idx: ProductoIdx[] = [];
  producto: Producto;
  productosFiltrados: ProductoIdx[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-3efda.firebaseio.com/productos_idx.json')
      .subscribe( (productos: ProductoIdx[]) =>{
        // console.log( productos );
        this.productos_idx= productos;
        // setTimeout(() => {
          this.cargando = false;
          // }, 1000);
          resolve();

        });

    });

  }


  getProducto( id: string ) {

    return this.http.get(`https://angular-html-3efda.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ){

    if ( this.productos_idx.length === 0 ) {
      // Cargar los productos
      this.cargarProductos().then( ()=> {
        // Aplicar el filtro
        this.filtrarProductos( termino );
      });

    } else {
      // Aplicar el filtro
      this.filtrarProductos( termino );
    }

  }


  private filtrarProductos( termino: string ) {

    // console.log( this.productos_idx );
    this.productosFiltrados = [];

    termino = termino.toLowerCase();

    this.productos_idx.forEach( prod => {

      let tituloLowerCase = prod.titulo.toLowerCase();
      let categoriaLowerCase = prod.categoria.toLowerCase();

      if ( categoriaLowerCase.indexOf( termino ) >= 0 || tituloLowerCase.indexOf( termino ) >= 0) {
          this.productosFiltrados.push( prod );
      }

    });
  }
}
