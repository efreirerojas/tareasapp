package com.efreire.mantenedordetareas.gateway;
import com.efreire.mantenedordetareas.domain.model.TareaModel;
import com.efreire.mantenedordetareas.domain.repository.TareaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TareaGatewayImpl implements TareaGateway {

    private final TareaRepository repository;

    public TareaGatewayImpl(TareaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<TareaModel> findAll() {
        return repository.findAll();
    }

    @Override
    public TareaModel save(TareaModel tarea) {
        return repository.save(tarea);
    }

    @Override
    public TareaModel findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
