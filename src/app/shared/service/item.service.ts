import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../model/item';
import {map} from 'rxjs/operators';
import {Produto} from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  URL_PRODUTOSCART = 'http://localhost:3000/cart';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Item []>{
    return this.httpClient.get<Item []>(this.URL_PRODUTOSCART);
  }

  inserir(item: Item): Observable<Item>{
    return this.httpClient.post<Item>(this.URL_PRODUTOSCART, item);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRODUTOSCART}/${id}`);
  }

  pesquisarPorId(produto: Produto): Observable<Item []> {
    return this.httpClient.get<Item []>(this.URL_PRODUTOSCART).pipe(map(i => i.filter(it => it.id === produto.id)));
  }

  atualizar(item: Item, it: Item): Observable<Item> {
    return this.httpClient.put<Item>(`${this.URL_PRODUTOSCART}/${item.id}`, it);
  }
}
