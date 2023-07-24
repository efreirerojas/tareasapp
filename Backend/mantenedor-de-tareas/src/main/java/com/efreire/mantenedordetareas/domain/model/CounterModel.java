package com.efreire.mantenedordetareas.domain.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class CounterModel {

    @Id
    private String id;
    private Long seq;

    public CounterModel(String id, Long seq) {
        this.id = id;
        this.seq = seq;
    }

    public CounterModel() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getSeq() {
        return seq;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }
}
