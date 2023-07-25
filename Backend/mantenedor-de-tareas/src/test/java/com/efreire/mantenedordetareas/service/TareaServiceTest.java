package com.efreire.mantenedordetareas.service;

import com.efreire.mantenedordetareas.domain.model.TareaModel;
import com.efreire.mantenedordetareas.gateway.TareaGateway;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Arrays;
import java.util.Date;
import java.util.List;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

class TareaServiceTest {

    @Mock
    private TareaGateway tareaGateway;

    @Mock
    private CounterService counterService;

    @InjectMocks
    private TareaService tareaService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        tareaService = new TareaService(tareaGateway);
        tareaService.setCounterService(counterService); // Asegúrate de que estás configurando el counterService aquí
    }

    @Test
    void shouldGetAllTareas() {
        TareaModel tareaModel = new TareaModel(1L, "Test",new Date(), true);
        when(tareaGateway.findAll()).thenReturn(Arrays.asList(tareaModel));
        List<TareaModel> result = tareaService.getAllTareas();
        assertEquals(1, result.size());
        verify(tareaGateway, times(1)).findAll();
    }

    @Test
    void shouldSaveNewTarea() {
        TareaModel tareaModel = new TareaModel(null, "Test",new Date(),  true);
        when(counterService.getNextSequence("tarea")).thenReturn(1L);
        when(tareaGateway.save(any(TareaModel.class))).thenReturn(tareaModel);

        TareaModel result = tareaService.saveTarea(tareaModel);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        verify(tareaGateway, times(1)).save(tareaModel);
        verify(counterService, times(1)).getNextSequence("tarea");
    }

    @Test
    void shouldGetTareaById() {
        Long id = 1L;
        TareaModel tareaModel = new TareaModel(id, "Test",new Date(), true);
        when(tareaGateway.findById(id)).thenReturn(tareaModel);

        TareaModel result = tareaService.getTareaById(id);

        assertNotNull(result);
        assertEquals(id, result.getId());
        verify(tareaGateway, times(1)).findById(id);
    }

    @Test
    void shouldDeleteTarea() {
        Long id = 1L;

        tareaService.deleteTarea(id);

        verify(tareaGateway, times(1)).deleteById(id);
    }
}
