package sms.co.zw.webservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import sms.co.zw.model.Message;
import sms.co.zw.model.ServerResponse;
import sms.co.zw.repository.MessageRepository;
import sms.co.zw.service.MessageService;
import sms.co.zw.service.ResponseService;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by ezinzombe on 3/28/18.
 */
@RestController
@RequestMapping("/sms")
public class SmsEndPoint {


    @Autowired
    private static MessageService messageService;

    @Autowired
    private ResponseService responseService;

    @Autowired
    private MessageRepository messageRepository;




    private String url = "http://192.168.20.58:1688/services/api/";


    // @Scheduled(cron = "0 41 22 * * ? ")

   // Fetch SMS every 2 minutes
 //   @Scheduled(cron = "*0/20 * * * * ? ")


    @Scheduled(cron = "0/05 * * * * ?")
    public void saveSMS() {
//        messageRepository.deleteAll();
        RestTemplate restTemplate = new RestTemplate();
        ServerResponse response = restTemplate.getForObject(url + "/messaging", ServerResponse.class);

        System.out.println("================================================"+url);
        System.out.println("££££££££££££££££££"+response);

        if (response != null) {
            List<Message> list = response.getMessages();

            for (Message m: list) {
                System.out.println("===================="+m.getId());
                System.out.println("===================="+m.getDate());
                System.out.println("===================="+m.getMessage());
                System.out.println("===================="+m.getMessageType());
                System.out.println("===================="+m.getReceiver());
                System.out.println("===================="+m.getTxt());
                System.out.println("===================="+m.getServiceCenter());
                System.out.println("=========STATUS==========="+m.getStatus());
            }

            final ServerResponse newResponse = responseService.save(response);
                list.forEach(message ->

                        message.setServerResponse(newResponse)
                );
                messageRepository.save(list);

        } else {
            System.out.println("---- Error Cannot Convert ServerResponse ----");
        }



        }


    @RequestMapping(value = "/list", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Message> listSMS() {
        List<Message> smsModelList = messageService.findAll().get();
        System.out.println("#######################"+smsModelList);
        return smsModelList;
    }

//    @Scheduled(cron = "0/05 * * * * ?")
//    public static void publish() {
//
//        System.out.println("******************FETCHING EVERY 5 SECONDS **********************" + LocalDateTime.now());
//
//        Message m= new Message();
//        m.setId("2345");
//        m.setMessage("BATTERY FULL");
//        m.setTxt("BATTERY FULL");
//        messageService.save(m);
//        System.out.println("****************************END TIME ******************************" + LocalDateTime.now());
//    }
//
//    @Scheduled(cron = "0/55 * * * * ?")
//    public void delete() {
//
//        System.out.println("######################## DELETING AFTER 50 SECONDS ###########################" + LocalDateTime.now());
//
////        messageRepository.deleteAll();
//        System.out.println("##################### DELETING AFTER 50 SECONDS ##################" + LocalDateTime.now());
//    }
}
