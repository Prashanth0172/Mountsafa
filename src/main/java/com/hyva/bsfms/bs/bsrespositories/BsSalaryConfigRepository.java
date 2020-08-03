package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Deduction;
import com.hyva.bsfms.bs.bsentities.SalaryConfig;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsSalaryConfigRepository extends JpaRepository<SalaryConfig, Long> {

    SalaryConfig findByEmployeeId(Long id);

}
