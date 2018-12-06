package sms.co.zw.serviceimpl;

import org.springframework.stereotype.Service;
import sms.co.zw.model.ServerResponse;
import sms.co.zw.repository.ResponseRepository;
import sms.co.zw.service.ResponseService;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

/**
 * Created by ezinzombe on 3/8/18.
 */
@Service
public class ResponseServiceImpl implements ResponseService {

    @Inject
    private ResponseRepository responseRepository ;

    @Override
    public ServerResponse save(ServerResponse response) {
        return responseRepository.save(response);
    }

    @Override
    public Optional<ServerResponse> findOne(Long id) {
        return Optional.ofNullable(responseRepository.findOne(id));
    }

    @Override
    public Optional<List<ServerResponse>> findAll() {
        return Optional.ofNullable((List<ServerResponse>) responseRepository.findAll());
    }


    @Override
    public void delete(Long id) {
        responseRepository.delete(id);
    }
}
