import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore ) {  }

  cargarImagenesFirebase( imagenes: FileItem[] ) {
    
    const storageRef = firebase.storage().ref(); //comandos de firebase -> ver doc

  }

  private guardarImagen( imagen: { nombre: string, url: string } ) {
    this.db.collection(`/${ this.CARPETA_IMAGENES }`).add( imagen );
  }

}
