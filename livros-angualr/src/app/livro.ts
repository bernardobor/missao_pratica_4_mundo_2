export class Livro implements Livro {
    codigo: number;
    titulo: string;
    resumo: string;
    codigoEditora: number;
    autores: string[];
  
    constructor(codigo: number, titulo: string, resumo: string, codigoEditora: number, autores: string[]) {
      this.codigo = codigo;
      this.titulo = titulo;
      this.resumo = resumo;
      this.codigoEditora = codigoEditora;
      this.autores = autores;
    }
  }
  