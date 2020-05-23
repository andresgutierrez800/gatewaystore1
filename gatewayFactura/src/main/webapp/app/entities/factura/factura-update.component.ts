import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IFactura, Factura } from 'app/shared/model/factura.model';
import { FacturaService } from './factura.service';
import { ICliente } from 'app/shared/model/cliente.model';
import { ClienteService } from 'app/entities/cliente/cliente.service';

@Component({
  selector: 'jhi-factura-update',
  templateUrl: './factura-update.component.html'
})
export class FacturaUpdateComponent implements OnInit {
  isSaving = false;
  clientes: ICliente[] = [];

  editForm = this.fb.group({
    id: [],
    fecha: [],
    valor: [],
    fechaPago: [],
    cliente: []
  });

  constructor(
    protected facturaService: FacturaService,
    protected clienteService: ClienteService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ factura }) => {
      if (!factura.id) {
        const today = moment().startOf('day');
        factura.fecha = today;
        factura.fechaPago = today;
      }

      this.updateForm(factura);

      this.clienteService
        .query({ filter: 'factura-is-null' })
        .pipe(
          map((res: HttpResponse<ICliente[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ICliente[]) => {
          if (!factura.cliente || !factura.cliente.id) {
            this.clientes = resBody;
          } else {
            this.clienteService
              .find(factura.cliente.id)
              .pipe(
                map((subRes: HttpResponse<ICliente>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ICliente[]) => (this.clientes = concatRes));
          }
        });
    });
  }

  updateForm(factura: IFactura): void {
    this.editForm.patchValue({
      id: factura.id,
      fecha: factura.fecha ? factura.fecha.format(DATE_TIME_FORMAT) : null,
      valor: factura.valor,
      fechaPago: factura.fechaPago ? factura.fechaPago.format(DATE_TIME_FORMAT) : null,
      cliente: factura.cliente
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const factura = this.createFromForm();
    if (factura.id !== undefined) {
      this.subscribeToSaveResponse(this.facturaService.update(factura));
    } else {
      this.subscribeToSaveResponse(this.facturaService.create(factura));
    }
  }

  private createFromForm(): IFactura {
    return {
      ...new Factura(),
      id: this.editForm.get(['id'])!.value,
      fecha: this.editForm.get(['fecha'])!.value ? moment(this.editForm.get(['fecha'])!.value, DATE_TIME_FORMAT) : undefined,
      valor: this.editForm.get(['valor'])!.value,
      fechaPago: this.editForm.get(['fechaPago'])!.value ? moment(this.editForm.get(['fechaPago'])!.value, DATE_TIME_FORMAT) : undefined,
      cliente: this.editForm.get(['cliente'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFactura>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ICliente): any {
    return item.id;
  }
}
