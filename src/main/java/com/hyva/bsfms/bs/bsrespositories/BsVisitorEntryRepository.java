package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.AttendanceMgt;
import com.hyva.bsfms.bs.bsentities.VistorEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsVisitorEntryRepository extends JpaRepository<VistorEntry, Long> {


    VistorEntry findByVisitorNameAndVistorIdNotIn(String name, Long id);
    VistorEntry findByVisitorName(String name);
    List<VistorEntry> findAllByVistorStatus(String status);
    List  <VistorEntry> findByVistorStatusAndVisitorNameContaining(String status, String name);
    VistorEntry findByVistorId(Long id);


}
