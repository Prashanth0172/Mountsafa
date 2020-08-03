package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Bank;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PosBankRepository extends JpaRepository<Bank,Long> {
        List<Bank> findAllByStatus(String status);
        List<Bank> findAllByStatusAndBankName(String status, String searchText);
        Bank findAllByBankName(String name);
        Bank findAllByBankNameAndBankIdNotIn(String name, Long id);
        Bank findFirstByBankNameAndStatus(String name, String status, Sort sort);
        List<Bank> findAllByBankNameContainingAndStatus(String name, String status, Pageable pageable);
        List<Bank> findAllByBankNameContainingAndStatus(String name, String status);
        Bank findFirstByStatus(String status, Sort sort);
        List<Bank> findAllByStatus(String status, Pageable pageable);

}
