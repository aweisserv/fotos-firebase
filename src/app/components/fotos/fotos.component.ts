import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { nombre: string; url: any; }

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html'
})
export class FotosComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  public items: Observable<Item[]>;

  constructor( private afs: AngularFirestore ) {

    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();

   }

  ngOnInit(): void {
  }

}
