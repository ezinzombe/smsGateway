package sms.co.zw.service.security;


import sms.co.zw.model.security.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

	User findUserByEmail(String email);


	User findUserByEmailAndPassword(String email, String password);

	User saveUser(User user);

	List<User> findAll();

	List<User> findUserByStatus(Integer status);

	Optional<User> findOne(Long id);

	void  delete(Long id);


	void delete(User deleted);


	public Boolean hasValidCredentials(String email, String password);
}
