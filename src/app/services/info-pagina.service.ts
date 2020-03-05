import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { MiembroEquipo } from '../interfaces/miembro-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: MiembroEquipo[];
  cargada: boolean = false;

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }


  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;

          //console.log( resp['email'] );
    });
  }

  private cargarEquipo() {

    this.http.get('https://angular-html-3efda.firebaseio.com/equipo.json')
        .subscribe( (resp: MiembroEquipo[]) => {

          this.cargada = true;
          this.equipo = resp;

          console.log( resp );
    });
  }



}
