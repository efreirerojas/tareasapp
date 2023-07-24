package com.efreire.mantenedordetareas.service;

import com.efreire.mantenedordetareas.domain.model.CounterModel;
import com.efreire.mantenedordetareas.domain.repository.CounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CounterService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private CounterRepository counterRepository;

    @Transactional
    public long getNextSequence(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));

        Update update = new Update();
        update.inc("seq", 1);

        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);
        options.upsert(true);

        CounterModel counter = mongoTemplate.findAndModify(query, update, options, CounterModel.class);

        return counter.getSeq();
    }

    public void createCounter(String id) {
        CounterModel counter = new CounterModel();
        counter.setId(id);
        counter.setSeq(0L);
        counterRepository.save(counter);
    }
}