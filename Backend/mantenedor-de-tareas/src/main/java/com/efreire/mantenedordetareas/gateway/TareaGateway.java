package com.efreire.mantenedordetareas.gateway;
import com.efreire.mantenedordetareas.domain.model.TareaModel;

import java.util.List;

public interface TareaGateway {
    List<TareaModel> findAll();
    TareaModel save(TareaModel tarea);
    TareaModel findById(Long id);
    void deleteById(Long id);
}
