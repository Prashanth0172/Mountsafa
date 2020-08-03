package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Deduction;
import com.hyva.bsfms.bs.bsentities.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsPayrollRepository extends JpaRepository<Payroll, Long> {
    Payroll findByEmpName(String name);
    Payroll findByEmpNameAndEmpIdNotIn(String name, Long id);
    //   List<Payslip> findAllByStatus(String status, Pageable pageable);
    List<Payroll> findAllByStatus(String status);
    List<Payroll> findAllByEmpName(String status);
    List<Payroll> findByStatusAndEmpNameContaining(String status, String searchtext);
//    Payslip findFirstByCityNameContainingAndStatus(String name, String status, Sort sort);
//    List<Payslip> findAllByCityNameContainingAndStatus(String name, String status, Pageable pageable);
//    Payslip findFirstByStatus(String status, Sort sort);
//    List<Payslip> findAllByCityNameContainingAndStatus(String searchText, String status);
        Payroll findByEmpId(Long id);

}
