import { Component, OnInit } from '@angular/core';
import {Item} from '../../shared/model/item';
import {ItemFirestoreService} from '../../shared/service/item-firestore.service';
import {ProdutoFirestoreService} from '../../shared/service/produto-firestore.service';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss']
})
export class DialogCartComponent implements OnInit {

  cart!: Array<Item>;

  constructor(private itemService: ItemFirestoreService, private produtoService: ProdutoFirestoreService) {}

  ngOnInit(): void {
    this.itemService.listar().subscribe(
      itens => {
        this.cart = itens;
      }
    );
  }

  removerProduto(item: Item, index: number): void {
    if (item.qnt !== undefined){
      if (item.qnt > 1){
        item.qnt = item.qnt - 1;
        this.itemService.atualizar(item).subscribe(
          it => {}
        );
      }
      else{
        if (item.id !== undefined && item.produto !== undefined){
          item.produto.item = '';
          this.produtoService.atualizar(item.produto).subscribe(
            it => {
              this.itemService.remover(item.id).subscribe(
                result => {}
              );
            }
          );
          this.cart.splice(index, 1);
        }
      }
    }
  }
}
