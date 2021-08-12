import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html'
})
export class CargaComponent implements OnInit {

  estaSobreDrop = false;
  archivos: FileItem[] = [];

  constructor( public _cargaImagenes: CargaImagenesService ) { }

  ngOnInit(): void {
  }

  cargarImagenes() {
  
    this._cargaImagenes.cargarImagenesFirebase( this.archivos )


  }

  pruebaSobreElemento( event: any ) {
    console.log( event );
    //this._cargaImagenes.cargarImagenesFirebase( this.archivos )


  }

}
