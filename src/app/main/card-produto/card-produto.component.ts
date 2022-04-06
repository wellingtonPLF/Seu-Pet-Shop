import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produto} from '../../shared/model/produto';
import {ProdutoService} from '../../shared/service/produto.service';
import {ItemService} from '../../shared/service/item.service';
import {Item} from '../../shared/model/item';
import {ProdutoFirestoreService} from '../../shared/service/produto-firestore.service';
import {ItemFirestoreService} from '../../shared/service/item-firestore.service';
import {map} from 'rxjs/operators';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  produtos!: Array<Produto>;

  constructor(private produtoService: ProdutoFirestoreService, private itemService: ItemFirestoreService) {
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtos => this.produtos = produtos
    );
  }

  inserirNoCart(produto: Produto): void {
    this.produtoService.getById(produto.id).subscribe(
      it => {
        if (it.exists != null){
          if (produto.item === undefined || produto.item === ''){
            const item = new Item();
            item.qnt = 1;
            item.produto = produto;
            this.itemService.inserir(item).subscribe(
              response => {
                produto.item = response.id;
                this.produtoService.atualizar(produto).subscribe(
                  result => {}
                );
              }
            );
          }
          else{
            this.itemService.pesquisarPorId(produto.item).subscribe(
              result => {
                if (result.qnt !== undefined){
                  result.qnt = result.qnt + 1;
                }
                result.produto = produto;
                this.itemService.atualizar(result).subscribe(
                  response => {}
                );
              }
            );
          }
        }
        else{
          console.log(`Product Doesn't exist`);
        }
      }
    );
  }
}
