import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProdutoService} from '../../shared/service/produto.service';
import {Produto} from '../../shared/model/produto';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss']
})
export class DialogCartComponent implements OnInit {

  cart!: Array<Produto>;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listarCart().subscribe(
      produtos => this.cart = produtos
    );
  }

  removerProduto(produto: Produto): void {
    this.produtoService.remover(produto.id).subscribe(
      produt => {
        const index = this.cart.findIndex(p => p.nome === produto.nome);
        this.cart.splice(index, 1);
      }
    );
  }
}
