package com.efreire.mantenedordetareas.service;
import com.efreire.mantenedordetareas.domain.model.TareaModel;
import com.efreire.mantenedordetareas.domain.repository.TareaRepository;
import com.efreire.mantenedordetareas.gateway.TareaGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TareaService {

    private final TareaGateway gateway;

    @Autowired
    private TareaRepository tareaRepository;
    @Autowired
    private CounterService counterService;

    public TareaService(TareaGateway gateway) {
        this.gateway = gateway;
    }

    public List<TareaModel> getAllTareas() {
        return gateway.findAll();
    }

    public void setCounterService(CounterService counterService) {
        this.counterService = counterService;
    }
    public TareaModel saveTarea(TareaModel tarea) {
        if (tarea.getId() == null) {
            tarea.setId(counterService.getNextSequence("tarea"));
        }
        if (tarea.getFechaCreacion() == null) {
            tarea.setFechaCreacion(new Date());
        }
        return gateway.save(tarea);
    }

    public TareaModel getTareaById(Long id) {
        return gateway.findById(id);
    }

    public void deleteTarea(Long id) {
        gateway.deleteById(id);
    }
}