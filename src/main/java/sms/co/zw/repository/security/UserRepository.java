package sms.co.zw.repository.security;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sms.co.zw.model.security.User;

import java.util.List;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);

	User findByEmailAndPassword(String email, String password);

	List<User> findAll();

	@Query("select a from User a where a.active =:status")
	List<User> findUserByActive(@Param("status") Integer status);


}
