import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Produto} from '../model/produto';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Item} from '../model/item';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {

  colecaoProduto: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = 'produtos';

  constructor(private afs: AngularFirestore) {
    this.colecaoProduto = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Produto []>{
    return this.colecaoProduto.valueChanges({idField: 'id'});
  }

  atualizar(produto: Produto): Observable<void> {
    const id = produto.id;
    delete produto.id;
    return from(this.colecaoProduto.doc(id).update(Object.assign({}, produto)));
  }

  getById(id?: string): Observable<any> {
    return this.colecaoProduto.doc(id).get().pipe(map(document => document));
  }

  pesquisarPorId(id: string | undefined): Observable<Produto> {
    return this.colecaoProduto.doc(id).get().pipe(map(document =>
      new Produto(document.id, document.data())));
  }
}
