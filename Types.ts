export interface List {
  nomelista: string;
  descricao: string;
  colunas: string[];
}

export interface Column {
  nomeColuna: string;
}

export interface DatabaseListReturn {
    idlista: number;
    nomelista: string;
    descricao: string;
}