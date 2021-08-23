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
    this.itemService.pesquisarPorProduto(produto).subscribe(
      item =>
      {
        if (item.length !== 0){
          /*this.itemService.atualizar(item[0], new Item(item[0].produto.id.toString(), item[0].qnt + 1, item[0].produto)).subscribe(
            i => console.log('updated')
          );*/
        }
        else{
          this.itemService.inserir(new Item(produto.id.toString(), 1, produto)).subscribe(
            produt => console.log('inserido')
          );
        })

      }
    );
    /*this.itemService.pesquisarPorProduto(produto).subscribe(
      (data) => {
        if (data[0] !== undefined){
          data.map(e => {
            const id = e.payload.doc.id;
            this.itemService.pesquisarPorId(id).subscribe(
              item => {
                console.log('Id:', id);
                // this.itemService.atualizar(item, new Item(item.id, item.qnt + 1, item.produto));
              }
            );
          });
        }
        else{
          this.itemService.inserir(new Item(produto.id.toString(), 1, produto)).subscribe(
            produt => console.log('Inserido')
          );
        }
      }
    );*/
  }
}
