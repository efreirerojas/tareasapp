package com.efreire.mantenedordetareas.service;

import com.efreire.mantenedordetareas.domain.model.CounterModel;
import com.efreire.mantenedordetareas.domain.repository.CounterRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class CounterServiceTest {

    @InjectMocks
    private CounterService counterService;

    @Mock
    private MongoTemplate mongoTemplate;

    @Mock
    private CounterRepository counterRepository;

    @Test
    public void createCounterTest() {
        CounterModel counter = new CounterModel();
        counter.setId("id");
        counter.setSeq(0L);
        when(counterRepository.save(any(CounterModel.class))).thenReturn(counter);

        counterService.createCounter("id");

        verify(counterRepository, times(1)).save(any(CounterModel.class));
    }

    @Test
    public void getNextSequenceTest() {
        CounterModel counter = new CounterModel();
        counter.setId("id");
        counter.setSeq(1L);

        when(mongoTemplate.findAndModify(
                any(Query.class),
                any(Update.class),
                any(),
                eq(CounterModel.class))
        ).thenReturn(counter);

        long sequence = counterService.getNextSequence("id");

        assertEquals(1L, sequence);
        verify(mongoTemplate, times(1)).findAndModify(
                any(Query.class),
                any(Update.class),
                any(),
                eq(CounterModel.class)
        );
    }
}
