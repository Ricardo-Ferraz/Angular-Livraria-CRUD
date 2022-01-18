export interface Livro{
  id: number,
  titulo: string,
  autor: string,
  descricaoBreve: string,
  descricao: string,
  preco: number,
  categoria: string[],
  qtdVendas: number,
  urlImagem: string
}
