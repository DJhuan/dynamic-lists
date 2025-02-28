export interface List {
  idlista?: number;
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

export interface DatabaseItemReturn {
  iditem: number;
  idlista: number;
  nomeitem: string;
  coluna: number;
}

export interface DatabaseColumnReturn {
  idcoluna: number;
  idlista: number;
  nomecoluna: string;
  ordemlista: number;
}

export interface ItemContextType {
  idlista: number;
  items: DatabaseItemReturn[];
  fetchItems: () => void;
  addItem: (nomeitem: string, idcoluna: number) => void;
  deleteItem: (iditem: number) => void;
}
