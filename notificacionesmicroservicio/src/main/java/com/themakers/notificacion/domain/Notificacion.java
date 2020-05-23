package com.themakers.notificacion.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.Instant;

import com.themakers.notificacion.domain.enumeration.TipoNotificacion;

import com.themakers.notificacion.domain.enumeration.FormatoDeNotificacion;

/**
 * A Notificacion.
 */
@Document(collection = "notificacion")
public class Notificacion implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("fecha")
    private Instant fecha;

    @Field("mensaje")
    private String mensaje;

    @NotNull
    @Field("fecha_enviado")
    private Instant fechaEnviado;

    @Field("user_id")
    private Long userId;

    @Field("tipo_notificacion")
    private TipoNotificacion tipoNotificacion;

    @Field("formatodenotifiaccion")
    private FormatoDeNotificacion formatodenotifiaccion;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Instant getFecha() {
        return fecha;
    }

    public Notificacion fecha(Instant fecha) {
        this.fecha = fecha;
        return this;
    }

    public void setFecha(Instant fecha) {
        this.fecha = fecha;
    }

    public String getMensaje() {
        return mensaje;
    }

    public Notificacion mensaje(String mensaje) {
        this.mensaje = mensaje;
        return this;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public Instant getFechaEnviado() {
        return fechaEnviado;
    }

    public Notificacion fechaEnviado(Instant fechaEnviado) {
        this.fechaEnviado = fechaEnviado;
        return this;
    }

    public void setFechaEnviado(Instant fechaEnviado) {
        this.fechaEnviado = fechaEnviado;
    }

    public Long getUserId() {
        return userId;
    }

    public Notificacion userId(Long userId) {
        this.userId = userId;
        return this;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public TipoNotificacion getTipoNotificacion() {
        return tipoNotificacion;
    }

    public Notificacion tipoNotificacion(TipoNotificacion tipoNotificacion) {
        this.tipoNotificacion = tipoNotificacion;
        return this;
    }

    public void setTipoNotificacion(TipoNotificacion tipoNotificacion) {
        this.tipoNotificacion = tipoNotificacion;
    }

    public FormatoDeNotificacion getFormatodenotifiaccion() {
        return formatodenotifiaccion;
    }

    public Notificacion formatodenotifiaccion(FormatoDeNotificacion formatodenotifiaccion) {
        this.formatodenotifiaccion = formatodenotifiaccion;
        return this;
    }

    public void setFormatodenotifiaccion(FormatoDeNotificacion formatodenotifiaccion) {
        this.formatodenotifiaccion = formatodenotifiaccion;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Notificacion)) {
            return false;
        }
        return id != null && id.equals(((Notificacion) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Notificacion{" +
            "id=" + getId() +
            ", fecha='" + getFecha() + "'" +
            ", mensaje='" + getMensaje() + "'" +
            ", fechaEnviado='" + getFechaEnviado() + "'" +
            ", userId=" + getUserId() +
            ", tipoNotificacion='" + getTipoNotificacion() + "'" +
            ", formatodenotifiaccion='" + getFormatodenotifiaccion() + "'" +
            "}";
    }
}
