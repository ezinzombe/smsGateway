package sms.co.zw.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.sql.DataSource;

//@Configuration
//@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private DataSource dataSource;

	@Value("${spring.queries.users-query}")
	private String usersQuery;

	@Value("${spring.queries.roles-query}")
	private String rolesQuery;

	@Override
	protected void configure(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.
				jdbcAuthentication()
				.usersByUsernameQuery(usersQuery)
				.authoritiesByUsernameQuery(rolesQuery)
				.dataSource(dataSource)
				.passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {

		httpSecurity
				.authorizeRequests().antMatchers("/", "/login","http://10.42.0.218/**", "/android/login/**","/map/**","/android/**", "/fuel/**","/stock/**","/fuelstation", "/fuelStation/**",
				"/admin/list/*","/stockDetail/**","/sms/save/**", "/sms/**", "/aboutus/**", "/sms/**").permitAll()
				.anyRequest().authenticated()
				.and()
				.formLogin().loginPage("/login").permitAll()
				.failureUrl("/login?error=true")
				.defaultSuccessUrl("/home")
				.usernameParameter("email")
				.passwordParameter("password")
				.and().logout().permitAll()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/").and().exceptionHandling()
				.accessDeniedPage("/access-denied");
	}


	@Override
	public void configure(WebSecurity web) throws Exception {
		web
				.ignoring()
				.antMatchers("/resources/**",
						"/scripts/**",
						"/advertimages/**",
						"/jquery-ui-1.11.4/**",
						"/sass/**",
						"/vendor", "/static/**", "/css/**", "/js/**", "/images/**");
	}
}