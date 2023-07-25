package com.efreire.mantenedordetareas.controller;

import com.efreire.mantenedordetareas.domain.model.TareaModel;
import com.efreire.mantenedordetareas.service.TareaService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class TareaControllerTest {

    @InjectMocks
    private TareaController tareaController;

    @Mock
    private TareaService tareaService;

    @Test
    public void getAllTareasTest() {
        when(tareaService.getAllTareas()).thenReturn(new ArrayList<>());

        ResponseEntity<List<TareaModel>> response = tareaController.getAllTareas();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(tareaService, times(1)).getAllTareas();
    }

    @Test
    public void saveTareaTest() {
        TareaModel tareaModel = new TareaModel(1L, "Test", new Date(), true);
        when(tareaService.saveTarea(any(TareaModel.class))).thenReturn(tareaModel);

        ResponseEntity<TareaModel> response = tareaController.saveTarea(tareaModel);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        verify(tareaService, times(1)).saveTarea(any(TareaModel.class));
    }

    @Test
    public void getTareaByIdTest() {
        TareaModel tareaModel = new TareaModel(1L, "Test", new Date(), true);
        when(tareaService.getTareaById(anyLong())).thenReturn(tareaModel);

        ResponseEntity<TareaModel> response = tareaController.getTareaById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(tareaService, times(1)).getTareaById(anyLong());
    }

    @Test
    public void deleteTareaTest() {
        doNothing().when(tareaService).deleteTarea(anyLong());

        ResponseEntity<Void> response = tareaController.deleteTarea(1L);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(tareaService, times(1)).deleteTarea(anyLong());
    }

    @Test
    public void editTareaTest() {
        TareaModel tareaModel = new TareaModel(1L, "Test", new Date(), true);
        when(tareaService.saveTarea(any(TareaModel.class))).thenReturn(tareaModel);

        ResponseEntity<TareaModel> response = tareaController.editTarea(1L, tareaModel);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(tareaService, times(1)).saveTarea(any(TareaModel.class));
    }


}
