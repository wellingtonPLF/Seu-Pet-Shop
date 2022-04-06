import {Produto} from "./produto";

export class Item{
  id?: string;
  qnt?: number;
  produto?: Produto;

  constructor(id?: string, item: Item = {}) {
    this.id = id;
    this.qnt = item.qnt;
    this.produto = item.produto;
  }
}
