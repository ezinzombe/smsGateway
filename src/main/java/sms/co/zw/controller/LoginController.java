package sms.co.zw.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import sms.co.zw.model.Message;
import sms.co.zw.model.security.Role;
import sms.co.zw.model.security.User;
import sms.co.zw.repository.security.RoleRepository;
import sms.co.zw.service.MessageService;
import sms.co.zw.service.security.RoleService;
import sms.co.zw.service.security.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Created by ezinzombe on 2/14/18.
 */
@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;
    @Autowired
    @Qualifier("roleRepository")
    private RoleRepository roleRepository;
    @Autowired
    private MessageService messageService;

    private final Logger logger = (org.slf4j.Logger) LoggerFactory.getLogger(LoginController.class);

    @RequestMapping(value = {"/"}, method = RequestMethod.GET)
    public ModelAndView landingHomePage() {
        ModelAndView modelAndView = new ModelAndView();


        List<Message> smsList = messageService.findAll().get();
        ArrayList<Message> newList = new ArrayList<>();
       final String whitespace = "                                               ";
        for (Message sms:smsList
             ) {
            String formattedMessage = sms.getMessage();

            String replaced = formattedMessage.replaceAll(Pattern.quote(","),whitespace);
            sms.setMessage(replaced);
            newList.add(sms);
        }
        modelAndView.addObject("smsList", newList);
        modelAndView.addObject("stockDetailList", messageService.findAll().get());
        modelAndView.setViewName("homepage");
        return modelAndView;
    }

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }

    @RequestMapping(value = {"/aboutus"}, method = RequestMethod.GET)
    public ModelAndView aboutUs() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("aboutus");
        return modelAndView;
    }


    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getName());

        Role role = roleService.findByRole("ADMIN");


        List<User> userList = userService.findAll();
        modelAndView.addObject("userName", "Welcome(" + user.getName() + ")");
        modelAndView.addObject("userList", userList);
        modelAndView.addObject("user", user);
        modelAndView.addObject("adminMessage", "Content Available Only for Users with Admin Role");
        modelAndView.setViewName("home");
        return modelAndView;
    }

}
