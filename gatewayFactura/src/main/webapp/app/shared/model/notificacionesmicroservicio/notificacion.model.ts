import { Moment } from 'moment';
import { TipoNotificacion } from 'app/shared/model/enumerations/tipo-notificacion.model';
import { FormatoDeNotificacion } from 'app/shared/model/enumerations/formato-de-notificacion.model';

export interface INotificacion {
  id?: number;
  fecha?: Moment;
  mensaje?: string;
  fechaEnviado?: Moment;
  userId?: number;
  tipoNotificacion?: TipoNotificacion;
  formatodenotifiaccion?: FormatoDeNotificacion;
}

export class Notificacion implements INotificacion {
  constructor(
    public id?: number,
    public fecha?: Moment,
    public mensaje?: string,
    public fechaEnviado?: Moment,
    public userId?: number,
    public tipoNotificacion?: TipoNotificacion,
    public formatodenotifiaccion?: FormatoDeNotificacion
  ) {}
}
