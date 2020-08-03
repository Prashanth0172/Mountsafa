package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AccountType;
import com.hyva.bsfms.bs.bsentities.Country;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountTypeRepository extends JpaRepository<AccountType,Long> {
    AccountType findByAccountName(String accountName);
    AccountType findByAccountNameAndAccountIdNotIn(String name, Long id);
    List<AccountType> findAllByAccountName(String name);
    List<AccountType>findAllByStatus(String status);
    List<AccountType>findAllByAccountNameContainingAndStatus(String countryName, String status);
    AccountType findFirstByAccountNameContainingAndStatus(String countryName, String status, Sort sort);
    AccountType findFirstByStatus(String status, Sort sort);
    List<AccountType>findAllByStatus(String status, Pageable pageable);
    List<AccountType> findAllByAccountNameContainingAndStatus(String name, String status, Pageable pageable);



}
