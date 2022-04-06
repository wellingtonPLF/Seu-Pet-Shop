export class Produto{
  id?: string;
  imagem?: string;
  nome?: string;
  preco?: number;
  descricao?: Array<string>;
  item?: string;

  constructor(id?: string, produto: Produto = {}) {
    this.id = id;
    this.imagem = produto.imagem;
    this.nome = produto.nome;
    this.preco = produto.preco;
    this.descricao = produto.descricao;
    this.item = produto.item;
  }
}
