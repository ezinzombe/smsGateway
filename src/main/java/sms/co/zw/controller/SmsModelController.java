package sms.co.zw.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import sms.co.zw.model.Message;
import sms.co.zw.service.MessageService;

import javax.inject.Inject;
import javax.validation.Valid;
import java.util.List;

/**
 * Created by ezinzombe on 3/8/18.
 */
@Controller
@RequestMapping("/message")
public class SmsModelController {

    private final Logger logger = (org.slf4j.Logger) LoggerFactory.getLogger(SmsModelController.class);

    @Inject
    private MessageService messageService;

    @RequestMapping(value = {"/add"}, method = RequestMethod.GET)
    public String add(Model model) {
        Message message = new Message();
        model.addAttribute("message", message);
        return "message/add";

    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(@Valid Message message, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "message/add";
        } else {
            messageService.save(message);
            System.out.println("############"+message+"######################");
            return "redirect:/message/list";
        }
    }

    @RequestMapping("/update/{id}")
    public String edit(@PathVariable Long id, Model model) {
        model.addAttribute("message", messageService.findOne(id));
        return "message/edit";
    }


    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String messageList(Model model, Message message) {
        logger.debug("Message detail - add() is executed!");


        List<Message> smsList = messageService.findAll().get();
//        smsList
//                .stream()
//                .filter
//                (l -> l.getMessage().equals(message.getMessage().contains("power"))).
//                findAny()
//                .isPresent();

        model.addAttribute("smsList", smsList);
        System.out.println("###############"+smsList);
        return "message/list";

    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    public String deleteModeOfPayment(@PathVariable("id") Long modeOfPaymentId, Model model) {
        messageService.delete(modeOfPaymentId);
        return "redirect:/message/list";
    }


    @RequestMapping(value = {"/send"}, method = RequestMethod.GET)
    public String getPage(Model model) {
        Message message = new Message();
        model.addAttribute("message", message);
        return "sendsms";

    }

    private String url = "http://192.168.20.58:1688/services/api/";

    @RequestMapping(value = "/sendSMS", method = RequestMethod.POST, produces = "application/json")
    private  String sendSMS(Message sms, String txt, Long ids, Model model,  RedirectAttributes redirectAttributes) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> parametersMap = new LinkedMultiValueMap<String, String>();
        parametersMap.add("date", "2018-04-22T11:14:36GMT+02:00");
        parametersMap.add("to", "+263779468898");
        parametersMap.add("id", "120");
        parametersMap.add("number", "+263779468898");
        parametersMap.add("message", txt);

        HttpEntity<MultiValueMap<String, String>> requestEntity=
                new HttpEntity<MultiValueMap<String, String>>(parametersMap, headers);
        String token = "";
        try{
            Message response = restTemplate.postForObject(url, requestEntity,  Message.class);
            token = response.getMessage() + " - " + response.getReceiver();
        }
        catch(Exception e){
            token = e.getMessage();
            System.out.println("token");
        }
        return "redirect:/";
    }

}
