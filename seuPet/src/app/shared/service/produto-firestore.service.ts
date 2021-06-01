import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Produto} from '../model/produto';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Item} from '../model/item';

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

  atualizar(produto: Produto, prod: Produto): Observable<void> {
    return from(this.colecaoProduto.doc(produto.id.toString()).update(Object.assign({}, prod)));
  }
}
