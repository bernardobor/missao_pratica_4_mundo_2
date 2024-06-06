import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codigoEditora: 1, titulo: 'Memórias Póstumas de Brás Cubas"', resumo: 'Um clássico da literatura brasileira que narra a vida e a morte de Brás Cubas, um homem que decide contar sua história depois de morto.', autores: [ 'Machado de Assis'] },
    { codigo: 2, codigoEditora: 2, titulo: 'Duna', resumo: 'Um épico de ficção científica que narra a história de Paul Atreides, um jovem destinado a liderar uma revolução em um planeta desértico onde a política, a religião e a ecologia se entrelaçam de maneira complexa.', autores: ['Frank Herbert'] },
    { codigo: 3, codigoEditora: 3, titulo: 'O Senhor dos Anéis"', resumo: 'Uma saga épica que narra a jornada de Frodo Bolseiro e seus companheiros para destruir um poderoso anel e derrotar o Senhor das Trevas, Sauron, em um mundo de fantasia épica repleto de seres mágicos e culturas diversas', autores: ['J.R.R. Tolkien'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
