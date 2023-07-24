package com.efreire.mantenedordetareas.domain.repository;
import com.efreire.mantenedordetareas.domain.model.CounterModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CounterRepository extends MongoRepository<CounterModel, String> {
}