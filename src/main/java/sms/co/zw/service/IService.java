package sms.co.zw.service;

import java.util.List;
import java.util.Optional;

/**
 * Created by ezinzombe on 2/14/18.
 */
public interface IService<T> {

    T save(T t);

    Optional<T> findOne(Long id);

    Optional<List<T>> findAll();

    void delete(Long id);
}