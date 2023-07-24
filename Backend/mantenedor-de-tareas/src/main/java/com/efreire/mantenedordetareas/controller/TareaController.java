package com.efreire.mantenedordetareas.controller;

import com.efreire.mantenedordetareas.domain.model.TareaModel;
import com.efreire.mantenedordetareas.service.TareaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Mantenedor de Tareas", description = "Mantenedor dedicado a la gestión de Tareas pendientes y/o realizadas.")
@RestController
@RequestMapping("/api/tareas")
public class TareaController {

    @Autowired
    private TareaService tareaService;

    @Operation(summary = "Lista todas las tareas")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tareas recuperadas con éxito"),
    })
    @GetMapping
    public ResponseEntity<List<TareaModel>> getAllTareas() {
        List<TareaModel> tareas = tareaService.getAllTareas();
        return new ResponseEntity<>(tareas, HttpStatus.OK);
    }

    @Operation(summary = "Agrega una nueva tarea")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Tarea creada exitosamente"),
    })
    @PostMapping
    public ResponseEntity<TareaModel> saveTarea(@Parameter(description = "Tarea que se necesita agregar", required = true) @RequestBody TareaModel tareaModel) {
        TareaModel savedTarea = tareaService.saveTarea(tareaModel);
        return new ResponseEntity<>(savedTarea, HttpStatus.CREATED);
    }

    @Operation(summary = "Obtiene una tarea por su ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tarea encontrada exitosamente"),
    })
    @GetMapping("/{id}")
    public ResponseEntity<TareaModel> getTareaById(@Parameter(description = "ID de la tarea que se necesita obtener", required = true) @PathVariable Long id) {
        TareaModel tareaModel = tareaService.getTareaById(id);
        return new ResponseEntity<>(tareaModel, HttpStatus.OK);
    }

    @Operation(summary = "Elimina una tarea por su ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Tarea eliminada exitosamente"),
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTarea(@Parameter(description = "ID de la tarea que se necesita eliminar", required = true) @PathVariable Long id) {
        tareaService.deleteTarea(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Operation(summary = "Edita una tarea existente")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tarea editada exitosamente"),
    })
    @PutMapping("/{id}")
    public ResponseEntity<TareaModel> editTarea(@Parameter(description = "ID de la tarea que se necesita editar", required = true) @PathVariable Long id,
                                                @Parameter(description = "Detalles de la tarea que se necesita editar", required = true) @RequestBody TareaModel tareaModel) {
        TareaModel updatedTarea = tareaService.saveTarea(tareaModel);
        return new ResponseEntity<>(updatedTarea, HttpStatus.OK);
    }
}
