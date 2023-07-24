package com.efreire.mantenedordetareas.domain.model;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@ApiModel(description = "Detalles sobre la tarea")
@Document(collection = "tareas")
public class TareaModel {

    @ApiModelProperty(notes = "El ID de la tarea, autogenerado por la base de datos")
    @Id
    private Long id;

    @ApiModelProperty(notes = "Descripción de la tarea, proporcionada por el usuario")
    private String descripcion;

    @ApiModelProperty(notes = "Fecha de creación de la tarea, generada automáticamente al crear la tarea")
    @Field("fechaCreacion")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date fechaCreacion;

    @ApiModelProperty(notes = "Estado de la tarea, true si la tarea está vigente, false si no lo está")
    private Boolean vigente;

    public TareaModel(Long id, String descripcion, Date fechaCreacion, Boolean vigente) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.vigente = vigente;
    }

    public TareaModel() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Boolean getVigente() {
        return vigente;
    }

    public void setVigente(Boolean vigente) {
        this.vigente = vigente;
    }
}
