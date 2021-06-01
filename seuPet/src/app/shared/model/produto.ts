export class Produto{
  id!: number;
  imagem!: string;
  nome!: string;
  preco!: number;
  descricao!: Array<string>;

  constructor(id: number, img: string, nome: string, preco: number, descricao: Array<string>) {
    this.id = id;
    this.imagem = img;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }
}
