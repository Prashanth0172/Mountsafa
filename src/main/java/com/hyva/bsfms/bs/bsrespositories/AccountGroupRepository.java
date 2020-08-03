package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AccountGroup;
import com.hyva.bsfms.bs.bsentities.Chapters;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountGroupRepository extends JpaRepository<AccountGroup,Long> {
    AccountGroup findByAccountName(String accountName);
    AccountGroup findByAccountNameAndAccountIdNotIn(String name, Long id);
    List<AccountGroup> findAllByAccountName(String name);
    List<AccountGroup>findAllByStatus(String status);
    List<AccountGroup>findAllByAccountNameContainingAndStatus(String countryName, String status);
    AccountGroup findFirstByAccountNameContainingAndStatus(String countryName, String status, Sort sort);
    AccountGroup findFirstByStatus(String status, Sort sort);
    List<AccountGroup>findAllByStatus(String status, Pageable pageable);
    List<AccountGroup> findAllByAccountNameContainingAndStatus(String name, String status, Pageable pageable);
    List<AccountGroup> findAllByAccountType(String name);


}
