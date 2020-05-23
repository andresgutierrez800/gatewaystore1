import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'factura',
        loadChildren: () => import('./factura/factura.module').then(m => m.GatewayFacturaFacturaModule)
      },
      {
        path: 'factura-detalle',
        loadChildren: () => import('./factura-detalle/factura-detalle.module').then(m => m.GatewayFacturaFacturaDetalleModule)
      },
      {
        path: 'cliente',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.GatewayFacturaClienteModule)
      },
      {
        path: 'notificacion',
        loadChildren: () =>
          import('./notificacionesmicroservicio/notificacion/notificacion.module').then(
            m => m.NotificacionesmicroservicioNotificacionModule
          )
      },
      {
        path: 'stock',
        loadChildren: () => import('./inventariomicroservicio/stock/stock.module').then(m => m.InventariomicroservicioStockModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class GatewayFacturaEntityModule {}
