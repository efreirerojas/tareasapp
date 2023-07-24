package com.efreire.mantenedordetareas.domain.repository;
import com.efreire.mantenedordetareas.domain.model.TareaModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TareaRepository extends MongoRepository<TareaModel, Long> {
}
