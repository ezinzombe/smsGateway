package sms.co.zw.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import sms.co.zw.model.security.Role;
import sms.co.zw.model.security.User;
import sms.co.zw.repository.security.RoleRepository;
import sms.co.zw.repository.security.UserRepository;

import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	@Qualifier("userRepository")
	private UserRepository userRepository;
	@Autowired
	@Qualifier("roleRepository")
	private RoleRepository roleRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;


	@Override
	public User findUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public User saveUser(User user) {

		user.setActive(2);

		if(user.getId()==null){
			System.out.println("------------- edited");
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//			notificationService.sendRegistrationNotification(user);

		}

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		User loginUser = userRepository.findByEmail(authentication.getName());

		Role roleAdmin = roleRepository.findByRole("ADMIN");

		if(loginUser!=null){
			if(loginUser.getRoles().contains(roleAdmin)){
				user.setActive(1);
			}
		}




		return userRepository.save(user);
	}

	@Override
	public Optional<User> findOne(Long id) {
		return Optional.ofNullable(userRepository.findOne(id));
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public List<User> findUserByStatus(Integer status) {
		return userRepository.findUserByActive(status);
	}


    @Override
    public void delete(Long id) {
        userRepository.delete(id);
    }

    @Override
    public void delete(User deleted) {
        userRepository.delete(deleted);
    }


	@Override
	public Boolean hasValidCredentials(String email, String password) {

		boolean result = false;
		List<User> users = findAll();

		for (User user : users) {

			String password1=user.getPassword();
			String userEmail1=user.getEmail();

			if((password.equals(password1)) && (email.equals(userEmail1))){
				result = true;
				break;
			}else {result = false;}
		}
		return result;
	}


	@Override
	public User findUserByEmailAndPassword(String email, String password) {
		User user = findUserByEmail(email);
		if(email.equalsIgnoreCase(user.getEmail()) && bCryptPasswordEncoder.matches(password, user.getPassword())) {
			System.out.println("Email and password correct!!!!");
		}else {
			System.out.println("Email or Password is incorrect");
		}
		return user;
	}
}
