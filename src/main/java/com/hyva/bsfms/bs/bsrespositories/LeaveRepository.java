package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.LeaveMaster;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface LeaveRepository extends JpaRepository<LeaveMaster,Long> , JpaSpecificationExecutor {
    List<LeaveMaster> findAllByLeaveType(String name);
    LeaveMaster findByLeaveTypeAndLeaveIdNotIn(String Name, Long id);
    LeaveMaster findByLeaveType(String Name);
    List<LeaveMaster> findAllByLeaveTypeContainingAndStatus(String name,String status);
    List<LeaveMaster> findAllByStatus(String status);
    LeaveMaster findFirstByLeaveTypeContainingAndStatus(String name, String status, Sort sort);
    List<LeaveMaster> findAllByLeaveTypeContainingAndStatus(String name, String status, Pageable pageable);
    LeaveMaster findFirstByStatus(String status, Sort sort);
    List<LeaveMaster> findAllByStatus(String status, Pageable pageable);






}
