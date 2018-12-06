package sms.co.zw.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sms.co.zw.model.security.Role;
import sms.co.zw.repository.security.RoleRepository;

import java.util.List;

/**
 * Created by micnice on 7/4/17.
 */

@Service
public class RoleServiceImpl implements RoleService {
  @Autowired
  RoleRepository roleRepository;

  @Override
  public Role findByRole (String role) {
    return roleRepository.findByRole(role);
  }

  @Override
  public List<Role> findAll () {
    return roleRepository.findAll();
  }
}
