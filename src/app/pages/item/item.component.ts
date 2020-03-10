import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Producto;
  id: string;

  constructor( private route: ActivatedRoute,
               public _productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
          // console.log( parametros['id'] );
          this._productoService.getProducto( parametros['id'] )
              .subscribe( (producto: Producto) => {
                this.producto = producto;
                this.id = parametros['id'];
                console.log(producto);
              });
        })

  }

}
