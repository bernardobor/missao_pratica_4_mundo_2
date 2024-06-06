import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codigoEditora: 1, nome: 'Editora 1' },
    { codigoEditora: 2, nome: 'Editora 2' },
    { codigoEditora: 3, nome: 'Editora 3' }
  ];

  constructor() { }

  getNomeEditora(codigoEditora: number): string {
    return this.editoras.find(e => e.codigoEditora === codigoEditora)?.nome || '';
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }
}