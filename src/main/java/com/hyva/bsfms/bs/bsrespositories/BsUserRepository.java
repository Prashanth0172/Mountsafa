package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.User;
import org.springframework.data.repository.CrudRepository;


public interface BsUserRepository extends CrudRepository<User, Long> {

    User findByUserNameAndPasswordUserAndBranchCode(String  userName, String Password,String branchCode);

    User findByEmail(String Email);

    User findByUserName(String name);
    User findByBranchId(Long id);
    User findByOrganizationId(Long empid);
}
