package sms.co.zw.service;

import sms.co.zw.model.Message;

import java.util.List;

/**
 * Created by ezinzombe on 3/8/18.
 */
public interface MessageService extends IService<Message> {


    List<Message> findMessageWithPower(String message);
}
