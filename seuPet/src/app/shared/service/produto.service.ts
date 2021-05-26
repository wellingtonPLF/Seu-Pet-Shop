import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from '../../shared/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  URL_PRODUTOS = 'http://localhost:3000/produtos';
  URL_PRODUTOSCART = 'http://localhost:3000/cart';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Produto []>{
    return this.httpClient.get<Produto []>(this.URL_PRODUTOS);
  }

  listarCart(): Observable<Produto []>{
    return this.httpClient.get<Produto []>(this.URL_PRODUTOSCART);
  }

  inserir(produto: Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(this.URL_PRODUTOSCART, produto);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRODUTOSCART}/${id}`);
  }
}
