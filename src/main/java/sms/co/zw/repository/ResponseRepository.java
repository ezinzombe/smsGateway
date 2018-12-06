package sms.co.zw.repository;

import org.springframework.data.repository.CrudRepository;
import sms.co.zw.model.ServerResponse;


/**
 * Created by ezinzombe on 3/8/18.
 */
public interface ResponseRepository extends CrudRepository<ServerResponse, Long> {
}
