import { Component, OnInit } from '@angular/core';
import {Produto} from '../../shared/model/produto';
import {ProdutoService} from '../../shared/service/produto.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  produtos!: Array<Produto>;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtos => this.produtos = produtos
    );
  }
  inserirNoCart(produto: Produto): void {
    this.produtoService.inserir(produto).subscribe(
        produt => console.log(produt)
    );
  }
}
