package com.efreire.mantenedordetareas.gateway;

import com.efreire.mantenedordetareas.domain.model.TareaModel;
import com.efreire.mantenedordetareas.domain.repository.TareaRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class TareaGatewayImplTest {

    @InjectMocks
    private TareaGatewayImpl tareaGateway;

    @Mock
    private TareaRepository tareaRepository;

    @Test
    public void findAllTest() {
        when(tareaRepository.findAll()).thenReturn(new ArrayList<>());

        List<TareaModel> tareas = tareaGateway.findAll();

        assertNotNull(tareas);
        verify(tareaRepository, times(1)).findAll();
    }

    @Test
    public void saveTest() {
        TareaModel tareaModel = new TareaModel(1L, "Test", new Date(), true);
        when(tareaRepository.save(any(TareaModel.class))).thenReturn(tareaModel);

        TareaModel savedTarea = tareaGateway.save(tareaModel);

        assertNotNull(savedTarea);
        verify(tareaRepository, times(1)).save(any(TareaModel.class));
    }

    @Test
    public void findByIdTest() {
        TareaModel tareaModel = new TareaModel(1L, "Test", new Date(), true);
        when(tareaRepository.findById(anyLong())).thenReturn(Optional.of(tareaModel));

        TareaModel foundTarea = tareaGateway.findById(1L);

        assertNotNull(foundTarea);
        verify(tareaRepository, times(1)).findById(anyLong());
    }

    @Test
    public void deleteByIdTest() {
        doNothing().when(tareaRepository).deleteById(anyLong());

        tareaGateway.deleteById(1L);

        verify(tareaRepository, times(1)).deleteById(anyLong());
    }
}
