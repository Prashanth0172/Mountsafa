package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.LeaveFormMaster;
import com.hyva.bsfms.bs.bsentities.LeaveMaster;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface LeaveFormRepository extends JpaRepository<LeaveFormMaster,Long> , JpaSpecificationExecutor {
    List<LeaveFormMaster> findAllByName(String name);
    LeaveFormMaster findByNameAndLeaveFormIdNotIn(String Name, Long id);
    LeaveFormMaster findByName(String Name);
    List<LeaveFormMaster> findAllByNameContainingAndStatus(String name, String status);
    List<LeaveFormMaster> findAllByStatus(String status);
    LeaveFormMaster findFirstByNameContainingAndStatus(String name, String status, Sort sort);
    List<LeaveFormMaster> findAllByNameContainingAndStatus(String name, String status, Pageable pageable);
    LeaveFormMaster findFirstByStatus(String status, Sort sort);
    List<LeaveFormMaster> findAllByStatus(String status, Pageable pageable);
}
