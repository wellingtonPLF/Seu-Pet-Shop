import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Produto} from '../model/produto';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemFirestoreService {

  colecaoItem: AngularFirestoreCollection<Item>;
  NOME_COLECAO = 'itens';

  constructor(private afs: AngularFirestore) {
    this.colecaoItem = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Item[]>{
    return this.colecaoItem.valueChanges({idField: 'id'});
  }

  inserir(item: Item): Observable<any>{
    delete item.id;
    return from(this.colecaoItem.add(Object.assign({}, item)));
  }

  remover(id: string | undefined): Observable<void> {
    return from(this.colecaoItem.doc(id).delete());
  }

  atualizar(item: Item): Observable<void> {
    const id = item.id;
    delete item.id;
    return from(this.colecaoItem.doc(id).update(Object.assign({}, item)));
  }

  pesquisarPorId(id: string | undefined): Observable<Item> {
    return this.colecaoItem.doc(id).get().pipe(map(document =>
      new Item(document.id, document.data())));
  }
}
