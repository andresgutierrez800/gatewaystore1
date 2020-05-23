export interface IFacturaDetalle {
  id?: number;
  productoId?: number;
}

export class FacturaDetalle implements IFacturaDetalle {
  constructor(public id?: number, public productoId?: number) {}
}
