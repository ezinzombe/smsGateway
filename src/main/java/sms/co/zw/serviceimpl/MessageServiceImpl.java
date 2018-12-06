package sms.co.zw.serviceimpl;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import sms.co.zw.model.Message;
import sms.co.zw.repository.MessageRepository;
import sms.co.zw.service.MessageService;

import javax.inject.Inject;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * Created by ezinzombe on 3/8/18.
 */
@Service
public class MessageServiceImpl implements MessageService {

    @Inject
    private MessageRepository messageRepository;

    @Override
    public Message save(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public Optional<Message> findOne(Long id) {
        return Optional.ofNullable(messageRepository.findOne(id));
    }

    @Override
    public Optional<List<Message>> findAll() {
        return Optional.ofNullable((List<Message>) messageRepository.findAll());
    }


    @Override
    public void delete(Long id) {
        messageRepository.delete(id);
    }

    public List<Message> findMessageWithPower(String message) {

        if (StringUtils.isNotEmpty(message)) {
            message = "%" + message.toLowerCase() + "%";
            return messageRepository.findMessageWithPower(message);
        } else {
            return Collections.emptyList();
        }
    }
}
