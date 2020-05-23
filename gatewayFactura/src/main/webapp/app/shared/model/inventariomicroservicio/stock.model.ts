import { IProducto } from 'app/shared/model/producto.model';

export interface IStock {
  id?: number;
  cantidad?: number;
  product?: IProducto;
}

export class Stock implements IStock {
  constructor(public id?: number, public cantidad?: number, public product?: IProducto) {}
}
