import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ItemService} from '../../shared/service/item.service';
import {Produto} from '../../shared/model/produto';
import {Item} from '../../shared/model/item';
import {ItemFirestoreService} from '../../shared/service/item-firestore.service';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss']
})
export class DialogCartComponent implements OnInit {

  cart!: Array<Item>;

  constructor(private itemService: ItemFirestoreService) {}

  ngOnInit(): void {
    this.itemService.listar().subscribe(
      produtos => this.cart = produtos
    );
  }

  removerProduto(item: Item): void {
    console.log('Removendo');
    if (item.qnt > 1){
        this.itemService.atualizar(item, new Item(item.id, item.qnt - 1, item.produto)).subscribe(
          it => console.log()
        );
        this.cart[this.cart.findIndex(x => x.id === item.id)].qnt = item.qnt - 1;
    }
    else{
      console.log(item);
      this.itemService.remover(item.id).subscribe(
        produt => console.log());
      const index = this.cart.findIndex(p => p.id === item.id);
      this.cart.splice(index, 1);
    }
  }
}
